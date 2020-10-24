import {getCurrentColorValue} from './colorState';
import { v4 as uuidv4 } from 'uuid';
import { getSelectedYarn } from './yarnsState';

export interface Stitch {
    id: String,
    right: Boolean,
    color: String,
    yarnId?: String
}

export interface Row {
    id: String,
    stitches: Array<Stitch>,
    section: Section,
    number: number
}

export enum Section {
    SLEEVE = "sleeve",
    HEEL = "heel",
    FOOT = "foot",
    TOES = "toes"
}
// TODO more realistic stitch count + yarn weight calc should consider sync changes
// TODO + stitches without yarn should be marked somehow
export function createStitches(): Array<Row> {
    return createRows(20, 24, Section.SLEEVE).concat(
        createRows(22, 12, Section.HEEL),
        createRows(1, 11, Section.HEEL, 22),
        createRows(1, 10, Section.HEEL, 23),
        createRows(54, 24, Section.FOOT),
        createRows(2, 22, Section.TOES),
        createRows(2, 20, Section.TOES, 2),
        createRows(2, 18, Section.TOES, 4),
        createRows(2, 16, Section.TOES, 6),
        createRows(2, 12, Section.TOES, 8),
        createRows(2, 10, Section.TOES, 10),
        createRows(2, 8, Section.TOES, 12),
        createRows(2, 6, Section.TOES, 14));
}

function createRows(rowCount: number, stitchCount: number, section: Section, rowStartIndx?: number): Array<Row> {
    const rows = [];
    let i = rowStartIndx ? rowStartIndx : 0;
    rowCount = rowStartIndx ? (rowCount + rowStartIndx) : rowCount;
    for (i; i < rowCount; i++) {
        const stitches = [];
        const color = getCurrentColorValue();
        const yarnId = getSelectedYarn.value.id
        for (let j = 0; j < stitchCount; j++) {
            const stitch = {id: uuidv4(), color, right: true, yarnId};
            if (section === Section.SLEEVE && ((j % 4 == 0) || ((j-1) % 4 == 0))) {
                stitch.right = false;
            } else if (section == Section.HEEL && j % 2 == 0) {
                stitch.right = false;
            }
            stitches.push(stitch);
        }
        rows.push({id: uuidv4(), section, number: i, stitches});
    }
    return rows;
}

