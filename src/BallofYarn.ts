import { v4 as uuidv4 } from 'uuid';

export class BallofYarn {

    private weight: Number;
    private color: String;
    private id: String;

    constructor(weight: Number, color: String) {
        this.id = uuidv4();
        this.weight = weight;
        this.color = color;
    }

    /**
     * Decrease weight based on number of stitches
     * given.
     * 
     * TODO how many stitches makes 1 g?
     * 
     * @param count stitchCount 
     */
    decreaseWeight(count: Number) {
    }

    /**
     * Restore yarn to ball of yarn based on number
     * of stitches given.
     * 
     * @param count stitchCount
     */
    restoreWeight(count: Number) {

    }
}