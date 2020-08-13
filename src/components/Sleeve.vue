<template>
  <ul>
    <color-setter :callback="changeColor" :title="'Sleeve'" class="section-color-setter"></color-setter>
    <row
      v-for="row in rows"
      :key="row.id"
      :stitches="row.stitches"
      :id="row.id"
    ></row>
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
      this.sockData.changeSleeveColor();
    },
  },
  data() {
    return {
      rows: this.sockData.getSleeve,
    };
  }
};
</script>
