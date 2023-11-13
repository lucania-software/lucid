import { Renderer } from "./Renderer";
export declare class Buffer {
    readonly renderer: Renderer;
    readonly size: number;
    readonly label?: string;
    private readonly _handle;
    /**
     * @param renderer
     * @param usage @see {@link Buffer.USAGE}
     * @param size
     */
    constructor(renderer: Renderer, usage: number, size: number, label?: string);
    write(sourceData: BufferSource | number[], destinationOffset?: number, sourceOffset?: number, size?: number): void;
    static create(renderer: Renderer, usage: number, data: number[], label?: string): Buffer;
    static readonly USAGE: {
        readonly MAP_READ: number;
        readonly MAP_WRITE: number;
        readonly COPY_SOURCE: number;
        readonly COPY_DESTINATION: number;
        readonly INDEX: number;
        readonly VERTEX: number;
        readonly UNIFORM: number;
        readonly STORAGE: number;
        readonly INDIRECT: number;
        readonly QUERY_RESOLVE: number;
    };
}
