import { FormatConfig } from "./connection";
export type InputConfig = {
    preferHeadphonesForIosDevices?: boolean;
};
export declare class Input {
    readonly context: AudioContext;
    readonly analyser: AnalyserNode;
    readonly worklet: AudioWorkletNode;
    readonly inputStream: MediaStream;
    static create({ sampleRate, format, preferHeadphonesForIosDevices, }: FormatConfig & InputConfig): Promise<Input>;
    private constructor();
    close(): Promise<void>;
}
