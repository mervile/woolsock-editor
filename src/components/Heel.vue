<template>
  <ul>
    <row v-for="row in rows" :key="row.id" :stitches="row.stitches" :id="row.id"></row>
  </ul>
</template>

<script>
import Row from "./Row";
import { getHeel, changeSectionColor } from "../uiState";
import { Section } from "../stitchData";

export default {
  components: {
    Row,
  },
  methods: {
    changeColor() {
      changeSectionColor(Section.HEEL);
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