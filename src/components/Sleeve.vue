<template>
  <ul>
    <button @click="changeColor()">changecolor</button>
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
import { getSleeve, changeSectionColor } from "../uiState";
import { Section } from "../stitchData";

export default {
  components: {
    Row,
  },
  methods: {
    changeColor() {
      changeSectionColor(Section.SLEEVE);
    },
  },
  data() {
    return {
      rows: getSleeve,
    };
  }
};
</script>

<style scoped>
button {
  position: absolute;
  right: -85px;
}
</style>