<template>
    <div>
        <label for="show-right-side-toggle">Show right side</label>
        <input
            type="checkbox"
            name="show-right-side-toggle"
            v-model="showRightSide"
            @change="toggleRightSideVisibility"
        />
    </div>
</template>

<script>
import { getRightSideVisibilityState, toggleRightSideVisibilityState } from '../visibilityState';

export default {
    data() {
        return {
            showRightSide: getRightSideVisibilityState
        }
    },
    methods: {
        toggleRightSideVisibility() {
            toggleRightSideVisibilityState();
        }
    }
}
</script>
