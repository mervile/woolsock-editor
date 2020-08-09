<template>
  <li>
    <button @click="changeColor()">changerowcolor</button>
    <stitch
      v-for="item in initialStitches"
      :key="item.id"
      :color="item.color"
      :right="item.right"
      :id="item.id"
      :row-id="rowId"
    ></stitch>
  </li>
</template>

<script>
import Stitch from "./Stitch";
import { changeRowColor } from "../uiState";

export default {
  components: {
    Stitch,
  },
  props: {
    stitches: Array,
    id: String,
  },
  data() {
    return {
      initialStitches: this.stitches,
      rowId: this.id,
    };
  },
  methods: {
    changeColor() {
      changeRowColor(this.id);
    },
  },
};
</script>

<style scoped>
button {
  visibility: hidden;
  position: absolute;
  right: -105px;
}

li {
  position: relative;
}

li:hover {
  transform: scale(1.05);
  z-index: 1;
}

li:hover button {
  visibility: visible;
}
</style>