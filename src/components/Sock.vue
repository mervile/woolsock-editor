<template>
  <div>
    <h2>{{title}}</h2>
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
import {Sock} from "../Sock";
import { Section } from "../stitchData";
import { getRightSideVisibilityState } from '../visibilityState';
import { isSyncingChanges } from '../syncChangesState';

export default {
  components: {
    HalfASock,
  },
  props: {
    title: String,
    sockData: Sock
  },
  data() {
    return {
      showRightSide: getRightSideVisibilityState,
      leftSide: this.sockData.leftSide,
      rightSide: this.sockData.rightSide
    };
  },
  emits: ['section-color-changed', 'row-color-changed'],
  methods: {
    syncSectionChangeWithRightSide(section) {
      if (isSyncingChanges()) {
        this.rightSide.changeSectionColor(section);
        this.$emit('section-color-changed', section);
      }
    },
    syncSectionChangeWithLeftSide(section) {
      if (isSyncingChanges()) {
        this.leftSide.changeSectionColor(section);
        this.$emit('section-color-changed', section);
      }
    },
    syncRowChangeWithRightSide(section, number) {
      if (isSyncingChanges()) {
        this.rightSide.changeRowColor(section, number);
        this.$emit('row-color-changed', section, number);
      }
    },
    syncRowChangeWithLeftSide(section, number) {
      if (isSyncingChanges()) {
        this.leftSide.changeRowColor(section, number);
        this.$emit('row-color-changed', section, number);
      }
    }
  },
};
</script>

<style scoped>
</style>