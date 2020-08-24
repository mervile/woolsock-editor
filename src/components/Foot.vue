<template>
  <ul class="foot">
    <color-setter :callback="changeColor" :title="'Foot'" class="section-color-setter"></color-setter>
    <row
      v-for="row in rows"
      :key="row.id"
      :stitches="row.stitches"
      :id="row.id"
      @row-color-changed="onRowColorChange"
    ></row>
  </ul>
</template>

<script>
import Row from "./Row";
import ColorSetter from "./ColorSetter";

export default {
  components: {
    Row,
    ColorSetter,
  },
  inject: ["sockData"],
  emits: ["foot-color-changed", 'row-color-changed'],
  methods: {
    changeColor() {
      this.sockData.changeFootColor();
      this.$emit("foot-color-changed");
    },
    onRowColorChange(id) {
      this.$emit('row-color-changed', id);
    }
  },
  data() {
    return {
      rows: this.sockData.getFoot,
    };
  },
};
</script>

<style scoped>
ul {
  justify-self: end;
}

li {
  float: left;
  width: 15px;
}

::v-deep(.stitch) {
  transform: rotate(-90deg);
}
</style>