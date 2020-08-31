import {HalfaSock} from "./HalfaSock";

export class Sock {

    private _leftSide: HalfaSock;
    private _rightSide: HalfaSock;

    constructor() {
        this._leftSide = new HalfaSock();
        this._rightSide = new HalfaSock();
    }

    get leftSide() {
        return this._leftSide;
    }

    get rightSide() {
        return this._rightSide;
    }
}
