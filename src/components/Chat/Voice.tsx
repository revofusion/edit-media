import { Button, Tooltip } from "flowbite-react";
import { useMemo, useState } from "react";
import { HiMicrophone } from "react-icons/hi";

type VoiceProps = {
    onResult: (result: string) => void;
};
  
export default function Voice ({ onResult }: VoiceProps) {
    const [voiceStarted, setVoiceStarted] = useState(false)
    const speechRecognition = useMemo<() => any>(() => {
        if (!("webkitSpeechRecognition" in window)) {
            return undefined
        }

        const speechRecognition = new (window as any).webkitSpeechRecognition();
        speechRecognition.continuous = true;
        speechRecognition.interimResults = true;
        speechRecognition.lang = 'en'
        speechRecognition.onstart = () => {
            setVoiceStarted(true)
        };
        speechRecognition.onend = () => {
            setVoiceStarted(false)
        }
        speechRecognition.onerror = (error) => {
            console.error(error);
            setVoiceStarted(false)
            speechRecognition.stop();
        }
        speechRecognition.onaudioend = () => {
            setVoiceStarted(false)
        };
  
        speechRecognition.onresult = (event) => {
            const [result] = (event.results as SpeechRecognitionResultList)[event.resultIndex]
            if (result) {
                onResult(result.transcript)
            }
        }
        
        
        return speechRecognition
    }, [onResult])

    if (!speechRecognition) {
        return (
            <></>
        )
    }

    return (
        <Button
            color={voiceStarted ? "primary" : "gray"}
            onClick={() => voiceStarted ? (speechRecognition as any).stop() : (speechRecognition as any).start()}
        >
            <Tooltip content="Say 'Send' to submit" placement="left">
                <div className="flex items-center gap-x-3">
                    Enable Voice <br/>
                    <HiMicrophone className="text-xl" />
                </div>
            </Tooltip>
        </Button>
    )
}