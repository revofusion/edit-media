let idCounter = 5555;

export class Channel {
    private _onmessage: (response: any) => void = () => {};
    public id: number;
    public __TAURI_CHANNEL_MARKER__: boolean = true;

    constructor() {
        this.id = idCounter++;
    }

    set onmessage(handler: (response: any) => void) {
        this._onmessage = handler;
    }

    get onmessage() {
        return this._onmessage;
    }

    toJSON() {
        return `__CHANNEL__:${this.id}`;
    }
}