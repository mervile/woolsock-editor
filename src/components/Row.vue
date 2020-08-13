<template>
  <li>
    <color-setter :callback="changeColor"></color-setter>
    <stitch
      v-for="item in stitches"
      :key="item.id"
      :color="item.color"
      :right="item.right"
      :id="item.id"
      :row-id="id"
    ></stitch>
  </li>
</template>

<script>
import Stitch from "./Stitch";
import ColorSetter from './ColorSetter';
import { changeRowColor } from "../uiState";

export default {
  components: {
    Stitch,
    ColorSetter
  },
  props: {
    stitches: Array,
    id: String,
  },
  methods: {
    changeColor() {
      changeRowColor(this.id);
    },
  },
};
</script>

<style scoped>
li {
  position: relative;
}

li:hover {
  transform: scale(1.05);
  z-index: 1;
}
</style>