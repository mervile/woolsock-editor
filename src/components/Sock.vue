<template>
  <div>
    <half-a-sock
      title="Left side"
      :sock-data="leftSide"
      @section-color-changed="syncSectionChangeWithRightSide"
      @row-color-changed="syncRowChangeWithRightSide"
    ></half-a-sock>
    <half-a-sock
      title="Right side"
      :sock-data="rightSide"
      @section-color-changed="syncSectionChangeWithLeftSide"
      @row-color-changed="syncRowChangeWithLeftSide"
      v-if="showRightSide"
    ></half-a-sock>
  </div>
</template>

<script lang="ts">
import HalfASock from "./HalfASock.vue";
import Sock from "../Sock";
import { Section } from "../stitchData";
import { getRightSideVisibilityState } from '../visibilityState';

export default {
  components: {
    HalfASock,
  },
  data() {
    const s = new Sock();
    return {
      leftSide: s.getLeftSide,
      rightSide: s.getRightSide,
      showRightSide: getRightSideVisibilityState
    };
  },
  methods: {
    syncSectionChangeWithRightSide(section) {
      this.rightSide.changeSectionColor(section);
    },
    syncSectionChangeWithLeftSide(section) {
      this.leftSide.changeSectionColor(section);
    },
    syncRowChangeWithRightSide(id) {
      this.rightSide.changeRowColor(id);
    },
    syncRowChangeWithLeftSide(id) {
      this.leftSide.changeRowColor(id);
    }
  },
};
</script>

<style scoped>
</style>