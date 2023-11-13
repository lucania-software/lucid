import { Buffer } from "./Buffer";
export declare class Model {
    vertexBuffer: Buffer;
    indexBuffer?: Buffer;
    constructor(vertexBuffer: Buffer, indexBuffer?: Buffer);
}
