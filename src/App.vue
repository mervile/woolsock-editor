<template>
  <div>
    <h1>Woolsock editor</h1>

    <color-picker></color-picker>

    <visibility-toggle></visibility-toggle>

    <sync-changes-toggle></sync-changes-toggle>

    <div class="socks">
      <sock
        :title="'Left foot'"
        :sock-data="leftFoot"
        @section-color-changed="syncSectionChangeWithRightFoot"
        @row-color-changed="syncRowChangeWithRightFoot"
      ></sock>
      <sock
        v-if="showRightFoot"
        :title="'Right foot'"
        :sock-data="rightFoot"
        @section-color-changed="syncSectionChangeWithLeftFoot"
        @row-color-changed="syncRowChangeWithLeftFoot"
      ></sock>
    </div>
  </div>
</template>

<script>
import Sock from './components/Sock';
import ColorPicker from './components/ColorPicker';
import VisibilityToggle from './components/VisibilityToggle';
import SyncChangesToggle from './components/SyncChangesToggle';
import SockModel from './Sock';
import { getRightFootVisibilityState } from './visibilityState';

export default {
  components: {
    Sock,
    ColorPicker,
    VisibilityToggle,
    SyncChangesToggle
  },
  data() {
    return {
      leftFoot: new SockModel(),
      rightFoot: new SockModel(),
      showRightFoot: getRightFootVisibilityState
    }
  },
  methods: {
    syncSectionChangeWithRightFoot(section) {
      this.rightFoot.getLeftSide.changeSectionColor(section);
      this.rightFoot.getRightSide.changeSectionColor(section);
    },
    syncSectionChangeWithLeftFoot(section) {
      this.leftFoot.getLeftSide.changeSectionColor(section);
      this.leftFoot.getRightSide.changeSectionColor(section);
    },
    syncRowChangeWithRightFoot(id) {
      this.rightFoot.getLeftSide.changeRowColor(id);
      this.rightFoot.getRightSide.changeRowColor(id);
    },
    syncRowChangeWithLeftFoot(id) {
      this.leftFoot.getLeftSide.changeRowColor(id);
      this.rightFoot.getRightSide.changeRowColor(id);
    }
  }
};
</script>

<style scoped>
.socks {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
}
</style>