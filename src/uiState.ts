import { ref, computed } from 'vue';

import { Stitch, Row, Section } from './stitchData.ts';
import { createStitches } from './stitchData.ts';

const state = ref(createStitches());
console.log('state', state.value);

function changeSectionColor(section: Section) {
    findRowsBySection(section).forEach((r: Row) => r.stitches.forEach((s: Stitch) => { s.color = "white" }));
}

function changeRowColor(rowId: String) {
    const row = findRow(rowId);
    if (row) {
        row.stitches.forEach((stitch: Stitch) => {
            stitch.color = 'white';
        });
    }
}

function changeStitchColor(rowId: String, stitchId: String) {
    const stitch = findStitch(rowId, stitchId);
    stitch.color = 'white';
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

const getSleeve = computed(() => findRowsBySection(Section.SLEEVE));
const getHeel = computed(() => findRowsBySection(Section.HEEL));
const getFoot = computed(() => findRowsBySection(Section.FOOT));
const getToes = computed(() => findRowsBySection(Section.TOES));

export {
    getSleeve,
    getHeel,
    getFoot,
    getToes,
    changeSectionColor,
    changeRowColor,
    changeStitchColor
}

