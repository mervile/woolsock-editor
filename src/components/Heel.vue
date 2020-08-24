<template>
  <ul>
    <color-setter :callback="changeColor" :title="'Heel'" class="section-color-setter"></color-setter>
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
  emits: ["heel-color-changed", "row-color-changed"],
  methods: {
    changeColor() {
      this.sockData.changeHeelColor();
      this.$emit("heel-color-changed");
    },
    onRowColorChange(id) {
      this.$emit('row-color-changed', id);
    }
  },
  data() {
    return {
      rows: this.sockData.getHeel,
    };
  },
};
</script>

<style scoped>
li {
  text-align: end;
}
</style>