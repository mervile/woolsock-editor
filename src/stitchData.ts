import {getCurrentColor} from './colorState.ts';

export interface Stitch {
    id: String,
    right: Boolean,
    color: String
}

export interface Row {
    id: String,
    stitches: Array<Stitch>,
    section: Section
}

export enum Section {
    SLEEVE = "sleeve",
    HEEL = "heel",
    FOOT = "foot",
    TOES = "toes"
}

export function createStitches(): Array<Row> {
    return createRows(20, 24, Section.SLEEVE).concat(
        createRows(13, 10, Section.HEEL),
        createRows(1, 9, Section.HEEL, 'curve'),
        createRows(1, 8, Section.HEEL, 'bottom'),
        createRows(50, 15, Section.FOOT),
        createRows(2, 14, Section.TOES),
        createRows(2, 12, Section.TOES, 'firstDecrease'),
        createRows(2, 10, Section.TOES, 'secondDecrease'),
        createRows(2, 8, Section.TOES, 'thirdDecrease'),
        createRows(2, 6, Section.TOES, 'wrapup'));
}

function createRows(rowCount: Number, stitchCount: Number, section: Section, extraRowId: String = ''): Array<Row> {
    const rows = [];
    for (let i = 0; i < rowCount; i++) {
        const stitches = [];
        //todo unique uuid
        const color = JSON.stringify(getCurrentColor);
        for (let j = 0; j < stitchCount; j++) {
            const stitch = {id: `${section}stitch${j}`, color: color, right: true};
            if (section === Section.SLEEVE && ((j % 4 == 0) || ((j-1) % 4 == 0))) {
                stitch.right = false;
            } else if (section == Section.HEEL && j % 2 == 0) {
                stitch.right = false;
            }
            stitches.push(stitch);
        }
        rows.push({id: `${section}row${i}${extraRowId}`, section, stitches});
    }
    return rows;
}

