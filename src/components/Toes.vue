<template>
  <ul class="toes">
    <row v-for="row in rows" :key="row.id" :stitches="row.stitches" :id="row.id"></row>
  </ul>
</template>

<script>
import Row from "./Row";
import { getToes, changeSectionColor } from "../uiState";
import { Section } from "../stitchData";

export default {
  components: {
    Row,
  },
  methods: {
    changeColor() {
      changeSectionColor(Section.TOES);
    },
  },
  data() {
    return {
      rows: getToes,
    };
  },
};
</script>

<style scoped>
ul {
  display: flex;
}

li {
  align-self: center;
  width: 15px;
}

::v-deep(.stitch) {
  transform: rotate(-90deg);
}
</style>