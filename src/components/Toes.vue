<template>
  <ul class="toes">
    <color-setter :callback="changeColor" :title="'Toes'" class="section-color-setter"></color-setter>
    <row v-for="row in rows" :key="row.id" :stitches="row.stitches" :id="row.id"></row>
  </ul>
</template>

<script>
import Row from "./Row";
import ColorSetter from './ColorSetter';

export default {
  components: {
    Row,
    ColorSetter
  },
  inject: ['sockData'],
  methods: {
    changeColor() {
      this.sockData.changeToesColor();
    },
  },
  data() {
    return {
      rows: this.sockData.getToes,
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