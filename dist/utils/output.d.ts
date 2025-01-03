import { FormatConfig } from "./connection";
export declare class Output {
    readonly context: AudioContext;
    readonly analyser: AnalyserNode;
    readonly gain: GainNode;
    readonly worklet: AudioWorkletNode;
    static create({ sampleRate, format, }: FormatConfig): Promise<Output>;
    private constructor();
    close(): Promise<void>;
}
