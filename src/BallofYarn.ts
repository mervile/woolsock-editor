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

    /**
     * Decrease weight based on number of stitches
     * given.
     * 
     * TODO how many stitches makes 1 g?
     * 
     * @param count total number of stitches sewn with this yarn 
     */
    calculateWeight(count: number) {
        if (count >= this.stitchLimit) {
            this.weight = this.weight - (count / this.stitchLimit);
        }
    }
}