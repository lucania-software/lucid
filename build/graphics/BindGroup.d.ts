import { Texture } from "./Texture";
import { Buffer } from "./Buffer";
import { Pipeline } from "./Pipeline";
import { TextureSampler } from "./TextureSampler";
type BindableResource = TextureSampler | Texture | Buffer;
export declare class BindGroup {
    readonly label: string;
    readonly index: number;
    readonly pipeline: Pipeline;
    private readonly _handle;
    constructor(pipeline: Pipeline, label: string, index: number, resources: BindableResource[]);
    private getUnderlyingResource;
}
export {};
