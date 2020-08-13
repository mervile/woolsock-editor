<template>
  <ul>
    <color-setter :callback="changeColor" :title="'Sleeve'" class="section-color-setter"></color-setter>
    <row
      v-for="row in rows"
      :key="row.id"
      :stitches="row.stitches"
      :id="row.id"
    ></row>
  </ul>
</template>

<script>
import Row from "./Row";
import ColorSetter from './ColorSetter';
import { getSleeve, changeSleeveColor } from "../uiState";

export default {
  components: {
    Row,
    ColorSetter
  },
  methods: {
    changeColor() {
      changeSleeveColor();
    },
  },
  data() {
    return {
      rows: getSleeve,
    };
  }
};
</script>
