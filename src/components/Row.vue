<template>
  <li>
    <color-setter :callback="changeColor"></color-setter>
    <stitch
      v-for="item in row.stitches"
      :key="item.id"
      :color="item.color"
      :right="item.right"
      :id="item.id"
      :row-id="row.id"
    ></stitch>
  </li>
</template>

<script>
import Stitch from "./Stitch";
import ColorSetter from './ColorSetter';

export default {
  components: {
    Stitch,
    ColorSetter
  },
  inject: ['sockData'],
  emits: ['row-color-changed'],
  props: {
    row: Object,
  },
  methods: {
    changeColor() {
      this.sockData.changeRowColor(this.row.section, this.row.number);
      this.$emit('row-color-changed', this.row.section, this.row.number);
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