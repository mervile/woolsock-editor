import HalfaSock from "./HalfaSock.ts";
import { computed } from 'vue';

class Sock {

    private _leftSide: HalfaSock;
    private _rightSide: HalfaSock;

    constructor() {
        this._leftSide = new HalfaSock();
        this._rightSide = new HalfaSock();
    }

    getLeftSide = computed(() => this._leftSide);
    getRightSide = computed(() => this._rightSide);
}

export default Sock;