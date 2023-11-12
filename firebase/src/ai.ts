import axios from "axios";
import {splitIgnoringEscaped} from "./utils/split";
import {AiResponse, AiVideoRequest, AiVideoResponse, MODELS, User} from "./ai.types";
import {storeAudioVideo} from "./stores/chat";
import dedent from "ts-dedent";
import {defineString} from "firebase-functions/params";

// Define some parameters
const openRouterApiKey = defineString("OPENROUTER_API_KEY");
// import { getGoogleSearch } from './google/getGoogleSearch';

const YOUR_SITE_URL = "http://localhost";

const askQuestion = async (model: MODELS, messages: { role: string, content: string }[], timeout = 60000): Promise<AiResponse> => {
  const result = await axios.post("https://openrouter.ai/api/v1/chat/completions", {
    "messages": messages,
    "model": model,
  }, {
    headers: {
      "Authorization": `Bearer ${openRouterApiKey}`,
      "HTTP-Referer": `${YOUR_SITE_URL}`,
      "Content-Type": "application/json",
    },
    timeout: timeout,
  });
  return result.data;
};

export const getFfmpegCommand = async (args: AiVideoRequest, user: User): Promise<AiVideoResponse> => {
  const {
    instructions,
    outputSubFolderPath,
    inputsLength,
    inputData,
    defaultFontPath,
    errors,
    errorCommands,
  } = args;
  // Get search
  // const googleQuery = `"ffmpeg -i" documentation for ${instructions}`
  // const googleResults = await getGoogleSearch(googleQuery)
  // const googleTextAddition = googleResults.length
  // ? `
  //     Here is also some search results for ${googleQuery} if it is useful:
  //     ${JSON.stringify(googleResults)}
  // `
  // : ''

  // const refresher = '' // `Here is a quick refresher on ffmpeg:  ${helpText}`

  // const parsedInputData = inputData.map(_ => {
  //   const obj: any = {}
  //   if (_.filename) obj.filename = _.filename
  //   if (_.duration) obj.duration = _.duration
  //   if (_.bit_rate) obj.bit_rate = _.bit_rate
  //   if (_.format_long_name) obj.format_long_name = _.format_long_name
  //   if (_.format_name) obj.format_name = _.format_name
  //   if (_.nb_streams) obj.nb_streams = _.nb_streams
  //   return obj
  // })
  //

  const inputModel = errors.length ? MODELS.GPT_4 : MODELS.GPT_3_INSTRUCT;
  const inputContent = errors.length ? dedent`
      You are an expert on ffmpeg version 4 and have access to ffmpeg.org manual in your training data.
      Take a deep breath and solve the the following task accurately, step by step.

      The user provided instructions of "${instructions}"

      The commands they tried were
      ${JSON.stringify(errorCommands, null, 2)}

      The errors they got were
      ${JSON.stringify(errors)}

      Fix the errors with the commands they tried.
      Strictly return only the corrected commands in JSON format: [{"command":""}], without any explanation.
    ` : dedent`
      You are an expert on ffmpeg version 4 and have access to ffmpeg.org manual in your training data.
      Take a deep breath and solve the the following task accurately, step by step.

      Given the task "${instructions}", generate an array of ffmpeg commands considering the following:
      - Output directory: ${outputSubFolderPath}
      - Perform task using these this ffprobe info on ${inputsLength} inputs: ${JSON.stringify(inputData, null, 2)}
      - You can use 1 or more command per input

      General Guidelines:
      1. Quality and Compatibility: To ensure high-quality output compatible with Apple devices, include the -pix_fmt yuv420p option in your command.
      2. Avoid Copying for GIFs: Avoid -c:a copy when the output is a GIF file.
      3. Even Dimensions: Ensure that the dimensions of the video (width and height) are even numbers when using H.264 encoding (libx264).
      4. File Paths: Use single forward slashes in file paths and enclose paths in quotation marks.
      5. Flag Usage Limit: Use each flag a maximum of once per command.

      Filter Guidelines:
      1. Filter Dependency: If a filter variable (like tw or th) is dependent on another filter, ensure that the dependent filter is placed after the filter it relies upon in the command sequence.
      2. Text Instructions: If you need to draw text in your output, make sure to use the fontfile='${defaultFontPath}' parameter.
      3. Keep filters concise and accurate. Do not use movie= inside -vf flag in command.
      4. -vf flags can only take 1 output, use -filter_complex for 1+ outputs. Every filter label mentioned in the command (e.g., -map "[v0]") must correspond to an existing label in the filter graph, and it should not be referenced more than once.

      Common parameters
      Add input: -i <file(s)>, example: -i color-%01d.png
      Add input alphabetically: -pattern_type glob -i '*.png'
      Set start frame (before -i): -start_number <number>
      Limit frames: -vframes <number>
      Overwrite without asking: -y (contraty to -n)
      Set ouput codec video/audio: -c:v == -codec:v == -vcodec / -a:v == -codec:a == -acodec
      Set bitrate video/audio: -b:v <rate> / -b:a <rate>, examples: -b:v 1400K, -b:v 1M
      Set offset between keyframes: -g <offset>
      Use video/audio filter: -vf == -filter:v / -af == -filter:a
      Set framerate (before input / output to pick target): -r <number>
      Format (input/output): -f <fmt>, (use -f lavfi to use filter as input)
      Constant Rate Factor (h264,h265): -crf (range: 0–51, 0=lossless, 23=default(h264), 28=default(h265), 51=worst)
      Common filters
      D->RGB: [in]format=pix_fmts=rgb24[out]: convert greyscale to rgb (required for stacking)
      Crop: [in]crop=<w>:<h>:<x>:<y>[out]
      Scale: [in]scale=<w>:<h>[out]
      Stack: [left][right]hstack[out], [top][bottom]vstack[out]
      Vary speed: [in]setpts=0.5*PTS[out]: (remember to half the value of 'vframes', if set), (2x speed, here)
      Textbox: drawtext=fontfile=<ttf>: text='<text>': fontcolor=<color>: fontsize=<size>: box=1: boxcolor=<color>: boxborderw=<w>: x=<x>: y=<y>
      Concat: ffmpeg -i 1.mp4 2.mp4 3.mp4 4.mp4 -filter_complex "concat=n=4:v=1:a=0"
      Width and height divisible by 2: pad=ceil(iw/2)*2:ceil(ih/2)*2
      Common formats
      For web (more compatible): ffmpeg -i <in>.mp4 -c:v libx264 -crf 23 -profile:v baseline -level 3.0 -pix_fmt yuv420p -movflags faststart <out>.mp4


      Remember, the task is to achieve "${instructions}" using the ${inputsLength} provided inputs, make sure there are no errors in the commands.
      Strictly return only the commands in JSON format: [{"command":""}], without any explanation.
    `;

  if (errors.length) {
    console.log("MY ERROR", inputContent);
  }
  const result = await askQuestion(inputModel, [{
    role: "user",
    content: inputContent,
  }]);

  console.dir(result, {depth: null});

  const content = result.choices[result.choices.length - 1].message.content.replace("  {", "{").replace(/\n/g, "");
  console.log(content);

  const startIndex = content.indexOf("[{");
  const endIndex = content.lastIndexOf("}]");
  const commandsJsonString = content.slice(startIndex, endIndex + 2);

  console.log(commandsJsonString);
  // Save response
  await storeAudioVideo(result, user, args);

  const commands = JSON.parse(commandsJsonString);
  const sanitizedCommands = commands.map((command: any) => {
    // Sometimes AI returns { command }
    if (typeof command === "object") {
      command = command["ffmpeg_command"] || command["command"] || command[Object.keys(command)[0]];
      if (typeof command === "object") {
        throw new Error("Could not process response, please try again");
      }
    }

    // Trim command and add default
    const trimmedCommand = command
      .trim() // Remove extra spaces
      .replace(/```/g, "") // Remove weird quotations
      .replace(/(\r\n|\n|\r)/gm, "") // Remove newlines
      .replace("ffmpeg ", ""); // Remove initial ffmpeg

    // Create args array
    let argsArray: string[] = splitIgnoringEscaped(trimmedCommand)
      .map((match: any) => match.startsWith("\"") && match.endsWith("\"") ? match.slice(1, -1) : match)
      .map((match: any) => match.startsWith("'") && match.endsWith("'") ? match.slice(1, -1) : match);

    // Add extra params
    const extraParams = [
      {key: "-y", command: ["-y"]},
      {key: "-loglevel", command: ["-loglevel", "error"]},
      {key: "-hide_banner", command: ["-hide_banner"]},
      {key: "-stats", command: ["-stats"]},
    ];
    for (const extra of extraParams) {
      if (!argsArray.includes(extra.key)) {
        argsArray = extra.command.concat(argsArray);
      }
    }

    return argsArray;
  });

  return sanitizedCommands;
};
