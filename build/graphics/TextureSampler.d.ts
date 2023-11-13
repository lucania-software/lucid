import { FilterMode } from "./Texture";
import { Renderer } from "./Renderer";
export declare class TextureSampler {
    private readonly _handle;
    constructor(renderer: Renderer, minificationFilter: FilterMode, magnificationFilter: FilterMode);
}
