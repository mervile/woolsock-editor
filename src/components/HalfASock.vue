<template>
  <div>
    <h2>{{title}}</h2>

    <div class="sock-container">
      <sleeve
        class="sleeve"
        @sleeve-color-changed="onSleeveColorChanged"
        @row-color-changed="onRowColorChanged">
      </sleeve>
      <heel
        class="heel"
        @heel-color-changed="onHeelColorChanged"
        @row-color-changed="onRowColorChanged"></heel>
      <foot
       class="foot"
       @foot-color-changed="onFootColorChanged"
       @row-color-changed="onRowColorChanged"
      ></foot>
      <toes
       class="toes"
       @toes-color-changed="onToesColorChanged"
       @row-color-changed="onRowColorChanged"
      ></toes>
    </div>
  </div>
</template>

<script>
import Sleeve from "./Sleeve";
import Heel from "./Heel";
import Foot from "./Foot";
import Toes from "./Toes";
import HalfaSock from "../HalfaSock";
import { Section } from "../stitchData";

export default {
  components: {
    Sleeve,
    Heel,
    Foot,
    Toes,
  },
  props: {
    title: String,
    sockData: Object,
  },
  emits: ["section-color-changed"],
  methods: {
    onSleeveColorChanged() {
      this.$emit("section-color-changed", Section.SLEEVE);
    },
    onHeelColorChanged() {
      this.$emit("section-color-changed", Section.HEEL);
    },
    onFootColorChanged() {
      this.$emit("section-color-changed", Section.FOOT);
    },
    onToesColorChanged() {
      this.$emit("section-color-changed", Section.TOES);
    },
    onRowColorChanged(id) {
      this.$emit("row-color-changed", id);
    }
  },
  provide() {
    return {
      sockData: this.sockData,
    };
  },
};
</script>

<style scoped>
.sleeve {
  grid-area: sleeve;
}

.heel {
  grid-area: heel;
}

.foot {
  grid-area: foot;
}

.toes {
  grid-area: toes;
}

.sock-container {
  display: grid;
  grid-template-columns: 155px 210px 545px 150px;
  grid-template-rows: auto;
  grid-template-areas:
    "sleeve sleeve . ."
    "heel foot foot toes";
  margin: 10px;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
  position: relative;
}
</style>