import { ref, computed, Ref } from 'vue';

import { Stitch, Row, Section } from './stitchData.ts';
import { createStitches } from './stitchData.ts';
import { getCurrentColorValue } from './colorState.ts';

class HalfaSock {

    private state: Ref<Array<Row>>

    constructor() {
        this.state = ref(createStitches());
    }

    private changeSectionColor(section: Section) {
        this.findRowsBySection(section).forEach((r: Row) => {
            this.changeRowStitchesColor(r)
        });
    }
    
    private changeRowStitchesColor(row: Row) {
        row.stitches.forEach((stitch: Stitch) => {
            stitch.color = getCurrentColorValue();
        });
    }
        
    private findRow(rowId: String) {
        return this.state.value.find((r: Row) => r.id === rowId);
    }
    
    private findRowsBySection(section: Section) {
        return this.state.value.filter((r: Row) => r.section === section);
    }

    private findStitch(rowId: String, stitchId: String) {
        const row = this.findRow(rowId);
        if (row) {
            const stitch = row.stitches.find((s: Stitch) => s.id === stitchId);
            return stitch;
        }
        return null;
    }

    changeRowColor(rowId: String) {
        const row = this.findRow(rowId);
        if (row) {
            this.changeRowStitchesColor(row);
        }
    }
    
    changeStitchColor(rowId: String, stitchId: String) {
        const stitch = this.findStitch(rowId, stitchId);
        stitch.color = getCurrentColorValue();
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
    
    getSleeve = computed(() => this.findRowsBySection(Section.SLEEVE));
    getHeel = computed(() => this.findRowsBySection(Section.HEEL));
    getFoot = computed(() => this.findRowsBySection(Section.FOOT));
    getToes = computed(() => this.findRowsBySection(Section.TOES));
}

export default HalfaSock;

