<template>
    <div>
        <label for="show-right-side-toggle">Show right side</label>
        <input
            type="checkbox"
            name="show-right-side-toggle"
            v-model="showRightSide"
            @change="toggleRightSideVisibility"
        />
        <label for="show-right-foot-toggle">Show right foot</label>
        <input
            type="checkbox"
            name="show-right-foot-toggle"
            v-model="showRightFoot"
            @change="toggleRightFootVisibility"
        />
    </div>
</template>

<script>
import * as v from '../visibilityState';

export default {
    computed: {
        showRightSide() { return v.getRightSideVisibilityState },
        showRightFoot() { return v.getRightFootVisibilityState }
    },
    methods: {
        toggleRightSideVisibility() {
            v.toggleRightSideVisibilityState();
        },
        toggleRightFootVisibility() {
            v.toggleRightFootVisibilityState();
        }
    }
}
</script>
