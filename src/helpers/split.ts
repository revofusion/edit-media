export function splitIgnoringEscaped(text: string): string[] {
    let tokens: string[] = [];
    let currentToken: string = "";
    let isInDoubleQuotes: boolean = false;
    let isInSingleQuotes: boolean = false;

    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        
        if (char === '"' && !isInSingleQuotes) {
            isInDoubleQuotes = !isInDoubleQuotes;
        } else if (char === "'" && !isInDoubleQuotes) {
            isInSingleQuotes = !isInSingleQuotes;
        }

        if (char === ' ' && !isInDoubleQuotes && !isInSingleQuotes) {
            tokens.push(currentToken);
            currentToken = "";
        } else {
            currentToken += char;
        }

        if (i === text.length - 1) {
            tokens.push(currentToken);
        }
    }

    return tokens;
}