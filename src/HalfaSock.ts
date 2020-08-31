import { Stitch, Row, Section, createStitches } from './stitchData';
import { getCurrentColorValue } from './colorState';
import { getSelectedYarn } from './yarnsState';

export class HalfaSock {

    private stitches: Array<Row>;

    constructor() {
        this.stitches = createStitches();
    }

    protected changeSectionColor(section: Section) {
        this.findRowsBySection(section).forEach((r: Row) => {
            this.changeRowStitchesColor(r)
        });
    }
    
    private changeRowStitchesColor(row: Row) {
        row.stitches.forEach((stitch: Stitch) => {
            this.updateStitch(stitch);
        });
    }
        
    private findRow(rowId: String) {
        return this.stitches.find((r: Row) => {
            return r.id === rowId
        });
    }
    
    private findRowsBySection(section: Section) {
        return this.stitches.filter((r: Row) => r.section === section);
    }

    private findStitch(rowId: String, stitchId: String) {
        const row = this.findRow(rowId);
        if (row) {
            const stitch = row.stitches.find((s: Stitch) => s.id === stitchId);
            return stitch;
        }
        return null;
    }

    private updateStitch(stitch: Stitch) {
        stitch.color = getCurrentColorValue();
        stitch.yarnId = getSelectedYarn.value.id;
    }

    changeRowColor(section: Section, number: number) {
        const rows = this.findRowsBySection(section);
        const row = rows.find((r: Row) => r.number === number);
        if (row) {
            this.changeRowStitchesColor(row);
        }
    }
    
    changeStitchColor(rowId: String, stitchId: String) {
        const stitch = this.findStitch(rowId, stitchId);
        this.updateStitch(stitch);
    }
    
    changeSleeveColor() {
        this.changeSectionColor(Section.SLEEVE);
    }
    
    changeHeelColor() {
        this.changeSectionColor(Section.HEEL);
    }
    
    changeFootColor() {
        this.changeSectionColor(Section.FOOT);
    }
    
    changeToesColor() {
        this.changeSectionColor(Section.TOES);
    }
    
    getSleeve() {
        return this.findRowsBySection(Section.SLEEVE);
    }

    getHeel() {
        return this.findRowsBySection(Section.HEEL);
    }

    getFoot() {
        return this.findRowsBySection(Section.FOOT);
    }

    getToes() {
        return this.findRowsBySection(Section.TOES);
    }

    getStitchCountForYarn(yarnId: string): number {
        let count = 0;
        this.stitches.filter(row => {
            const stitches = row.stitches.filter(s => s.yarnId && s.yarnId === yarnId);
            count = count + stitches.length;
        });
        return count;
    };
}
