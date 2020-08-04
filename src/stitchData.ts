export interface Stitch {
    id: String,
    right: Boolean,
    color: String
}

export function generateStitches(rowCount: Number, stitchCount: Number, idStart: String, isSleeve: Boolean = false) {
    const rows = [];
    for (let i = 0; i < rowCount; i++) {
        const stitches = [];
        for (let j = 0; j < stitchCount; j++) {
            if (idStart == 'sleeve') {
                stitches.push({id: idStart + 'stitch' + j, right: (j % 4 == 0) || ((j-1) % 4 == 0) ? false : true, color: 'blue'});
            } else if (idStart == 'heel') {
                stitches.push({id: idStart + 'stitch' + j, right: j % 2 == 0 ? false : true, color: 'blue'})
            } else {
                stitches.push({id: idStart + 'stitch' + j, right: true, color: 'blue'})
            }
        }
        rows.push({id: idStart + 'row' + i, stitches});
    }
    console.log(rows);
    return rows;
}

