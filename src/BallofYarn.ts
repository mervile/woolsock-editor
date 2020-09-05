import { v4 as uuidv4 } from 'uuid';

export class BallofYarn {

    private weight: number;
    private color: string;
    private _id: string;
    private stitchLimit: number = 10;  // the number of stitches that make up 1g.

    constructor(weight: number, color: string) {
        this._id = uuidv4();
        this.weight = weight;
        this.color = color;
    }

    get id() {
        return this._id;
    }
}