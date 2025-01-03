import { OutgoingSocketEvent } from "./events";
export type Language = "en" | "ja" | "zh" | "de" | "hi" | "fr" | "ko" | "pt" | "it" | "es" | "id" | "nl" | "tr" | "pl" | "sv" | "bg" | "ro" | "ar" | "cs" | "el" | "fi" | "ms" | "da" | "ta" | "uk" | "ru" | "hu" | "no" | "vi";
export type SessionConfig = {
    origin?: string;
    authorization?: string;
    overrides?: {
        agent?: {
            prompt?: {
                prompt?: string;
            };
            firstMessage?: string;
            language?: Language;
        };
        tts?: {
            voiceId?: string;
        };
    };
    customLlmExtraBody?: any;
} & ({
    signedUrl: string;
    agentId?: undefined;
} | {
    agentId: string;
    signedUrl?: undefined;
});
export type FormatConfig = {
    format: "pcm" | "ulaw";
    sampleRate: number;
};
export declare class Connection {
    readonly socket: WebSocket;
    readonly conversationId: string;
    readonly inputFormat: FormatConfig;
    readonly outputFormat: FormatConfig;
    static create(config: SessionConfig): Promise<Connection>;
    private constructor();
    close(): void;
    sendMessage(message: OutgoingSocketEvent): void;
}
