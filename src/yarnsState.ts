import { ref, computed } from 'vue';
import {BallofYarn} from './BallofYarn';
import { setColor } from './colorState';

const yarnsState = ref({list: [], selected: null});

function addBallofYarn(color, weight) {
    const yarn = new BallofYarn(weight, color);
    yarnsState.value.list.push(yarn);
    console.log(yarnsState);
}

function selectYarn(yarnId) {
    const yarn = yarnsState.value.list.find(y => y.id === yarnId);
    if (yarn) {
        yarnsState.value.selected = yarn;
        console.log('selected:', yarnsState.value);
        setColor(yarn.color);
    }
}

const getBallsofYarn = computed(() => yarnsState.value.list);
const getSelectedYarn = computed(() => yarnsState.value.selected);

export {
    addBallofYarn,
    selectYarn,
    getBallsofYarn,
    getSelectedYarn
}