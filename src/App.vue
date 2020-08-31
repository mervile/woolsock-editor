<template>
  <div>
    <h1>Woolsock editor</h1>

    <visibility-toggle></visibility-toggle>

    <sync-changes-toggle></sync-changes-toggle>

    <add-yarn-modal></add-yarn-modal>

    <yarn-list></yarn-list>

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
import VisibilityToggle from './components/VisibilityToggle';
import SyncChangesToggle from './components/SyncChangesToggle';
import AddYarnModal from './components/AddYarnModal';
import YarnList from './components/YarnList';
import { getRightFootVisibilityState } from './visibilityState';
import { getLeftFoot, getRightFoot } from './socksState';

export default {
  components: {
    Sock,
    VisibilityToggle,
    SyncChangesToggle,
    AddYarnModal,
    YarnList
  },
  data() {
    return {
      leftFoot: getLeftFoot,
      rightFoot: getRightFoot,
      showRightFoot: getRightFootVisibilityState
    }
  },
  methods: {
    syncSectionChangeWithRightFoot(section) {
      this.rightFoot.leftSide.changeSectionColor(section);
      this.rightFoot.rightSide.changeSectionColor(section);
    },
    syncSectionChangeWithLeftFoot(section) {
      this.leftFoot.leftSide.changeSectionColor(section);
      this.leftFoot.rightSide.changeSectionColor(section);
    },
    syncRowChangeWithRightFoot(section, number) {
      this.rightFoot.leftSide.changeRowColor(section, number);
      this.rightFoot.rightSide.changeRowColor(section, number);
    },
    syncRowChangeWithLeftFoot(section, number) {
      this.leftFoot.leftSide.changeRowColor(section, number);
      this.leftFoot.rightSide.changeRowColor(section, number);
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