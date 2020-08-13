import { ref, computed } from 'vue';

import { Stitch, Row, Section } from './stitchData.ts';
import { createStitches } from './stitchData.ts';

function setColor(color: String) {
    console.log('setColor', color);
    colorState.value.currentColor = color;
}

function changeSectionColor(section: Section) {
    findRowsBySection(section).forEach((r: Row) => changeRowStitchesColor(r));
}

function changeRowColor(rowId: String) {
    const row = findRow(rowId);
    if (row) {
        changeRowStitchesColor(row);
    }
}

function changeRowStitchesColor(row: Row) {
    row.stitches.forEach((stitch: Stitch) => {
        stitch.color = colorState.value.currentColor;
    });
}

function changeStitchColor(rowId: String, stitchId: String) {
    const stitch = findStitch(rowId, stitchId);
    stitch.color = colorState.value.currentColor;
}

function findRow(rowId: String) {
    return state.value.find((r: Row) => r.id === rowId);
}

function findRowsBySection(section: Section) {
    return state.value.filter((r: Row) => r.section === section);
}

function findStitch(rowId: String, stitchId: String) {
    const row = findRow(rowId);
    if (row) {
        const stitch = row.stitches.find((s: Stitch) => s.id === stitchId);
        return stitch;
    }
    return null;
}

function changeSleeveColor() {
    changeSectionColor(Section.SLEEVE);
}

function changeHeelColor() {
    changeSectionColor(Section.HEEL);
}

function changeFootColor() {
    changeSectionColor(Section.FOOT);
}

function changeToesColor() {
    changeSectionColor(Section.TOES);
}

const getCurrentColor = computed(() => colorState.value.currentColor);
const getSleeve = computed(() => findRowsBySection(Section.SLEEVE));
const getHeel = computed(() => findRowsBySection(Section.HEEL));
const getFoot = computed(() => findRowsBySection(Section.FOOT));
const getToes = computed(() => findRowsBySection(Section.TOES));

const colorState = ref({currentColor: '#000000'});
const state = ref(createStitches());
console.log('state', state.value, 'colorState', colorState.value);

export {
    getSleeve,
    getHeel,
    getFoot,
    getToes,
    getCurrentColor,
    changeSleeveColor,
    changeHeelColor,
    changeFootColor,
    changeToesColor,
    changeRowColor,
    changeStitchColor,
    setColor
}

