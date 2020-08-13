<template>
  <ul>
    <color-setter :callback="changeColor" :title="'Heel'" class="section-color-setter"></color-setter>
    <row v-for="row in rows" :key="row.id" :stitches="row.stitches" :id="row.id"></row>
  </ul>
</template>

<script>
import Row from "./Row";
import ColorSetter from './ColorSetter';
import { getHeel, changeHeelColor } from "../uiState";

export default {
  components: {
    Row,
    ColorSetter
  },
  methods: {
    changeColor() {
      changeHeelColor();
    },
  },
  data() {
    return {
      rows: getHeel,
    };
  },
};
</script>

<style scoped>
li {
  text-align: end;
}
</style>