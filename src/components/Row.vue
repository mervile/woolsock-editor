<template>
    <li @click.stop="changeColor()">
        <stitch v-for="item in initialStitches" :key="item.id" :color="item.color" :right="item.right"></stitch>
    </li>
</template>

<script>
import Stitch from './Stitch';

export default {
  components: {
      Stitch
  },
  props: {
      stitches: Array
  },
  data() {
      return {
          initialStitches: this.stitches
      }
  },
  watch: {
      stitches(newStitches, oldStitches) {
          this.initialStitches = newStitches;
      }
  },
  methods: {
      changeColor() {
          this.initialStitches = this.stitches.map(s => {s.color = 'red'; return s});
      }
  }
};
</script>

<style scoped>
li:hover {
    background-color: black;
}
</style>