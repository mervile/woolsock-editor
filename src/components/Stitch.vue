<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="stitch"
    width="15"
    height="15"
    @click.stop="changeColor()"
  >
    <path
      v-if="right"
      stroke="black"
      v-bind:fill="color"
      d="M-2.0262794416288 5.0766062413412a11 11 0 0 1 19.052558883258 0l-3.5525588832577 -6.1532124826824a11 11 0 0 1 -9.5262794416288 16.5l7.1051177665153 0a11 11 0 0 1 -9.5262794416288 -16.5"
    />
    <path
      v-if="!right"
      d="M2 2 L13 2 L13 10 L2 10 Z"
      stroke="black"
      stroke-linecap="round"
      :fill="color"
    />
  </svg>
</template>

<script lang="ts">
import { changeStitchColor } from "../uiState";

export default {
  props: {
    color: String,
    right: Boolean,
    id: String,
    rowId: String,
  },
  methods: {
    changeColor() {
      changeStitchColor(this.rowId, this.id);
    },
  },
};
</script>

<style scoped>
svg:hover {
  transform: scale(1.2);
  border: 1px solid gray;
}
</style>