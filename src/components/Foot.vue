<template>
  <ul class="foot">
    <row v-for="row in rows" :key="row.id" :stitches="row.stitches" :id="row.id"></row>
  </ul>
</template>

<script>
import Row from "./Row";
import { getFoot, changeSectionColor } from "../uiState";
import { Section } from "../stitchData";

export default {
  components: {
    Row,
  },
  methods: {
    changeColor() {
      changeSectionColor(Section.FOOT);
    },
  },
  data() {
    return {
      rows: getFoot,
    };
  },
};
</script>

<style scoped>
ul {
  justify-self: end;
}

li {
  float: left;
  width: 15px;
}

::v-deep(.stitch) {
  transform: rotate(-90deg);
}
</style>