<template>
    <div>
        <label for="color-picker">Select color to paint with </label>
        <input type="color" v-model="color" :value="color" name="color-picker" @change="selectColor" />
    </div>
</template>

<script lang="ts">
import { getCurrentColor, setColor } from '../uiState'

export default {
    data() {
        return {
            color: getCurrentColor
        }
    },
    methods: {
        selectColor(event) {
            setColor(event.target.value);
        }
    }
}
</script>

<style scoped>
</style>
