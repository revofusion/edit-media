import type {Format} from "../../src/formatters/ffprobeStreams";

export interface AiVideoRequest {
    instructions: string,
    outputSubFolderPath: string,
    inputsLength: number,
    inputData: Format[],
    defaultFontPath: string,
    errors: string[],
    errorCommands: string[]
}

export interface AiVideoResponse {
    user: User,
    data: string[][]
}

export interface User {
    user_id: string
    tokens_remaining: number
    tokens_used: number
    tokens_refreshed: number
}

export interface AiResponse {
    choices: {
        message: {
            role: string,
            content: string
        },
        finish_reason: string
    }[],
    model: string,
    usage: {
        prompt_tokens: number,
        completion_tokens: number,
        total_tokens: number
    },
    id: string,
    object: string,
    created: number
}

export enum MODELS {
    GPT3 = "openai/gpt-3.5-turbo",
    GPT_3_INSTRUCT = "openai/gpt-3.5-turbo-instruct",
    GPT_4 = "openai/gpt-4",
    GPT_4_32K = "openai/gpt-4-32k",
    GPT_4_TURBO = "openai/gpt-4-1106-preview",
    PHIND_34B = "phind/phind-codellama-34b",
    CLAUDE = "anthropic/claude-2",
    META = "meta-llama/codellama-34b-instruct",
    PALM2 = "google/palm-2-codechat-bison",
    ORCA = "open-orca/mistral-7b-openorca"
}
