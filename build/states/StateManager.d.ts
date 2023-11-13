import { State } from "./State";
export declare class StateManager {
    private _stateMap;
    private _currentState?;
    private _loaded;
    constructor();
    register(state: State): void;
    unregister(stateName: string): State;
    getState(stateName: string): State | undefined;
    update(deltaTime: number): void;
    change(stateName: string): Promise<void>;
    load(): Promise<void>;
}
