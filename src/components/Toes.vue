<template>
  <ul class="toes">
    <color-setter :callback="changeColor" :title="'Toes'" class="section-color-setter"></color-setter>
    <row
      v-for="row in rows"
      :key="row.id"
      :row="row"
      @row-color-changed="onRowColorChange"
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
  emits: ['toes-color-changed', 'row-color-changed'],
  methods: {
    changeColor() {
      this.sockData.changeToesColor();
      this.$emit('toes-color-changed');
    },
    onRowColorChange(section, number) {
      this.$emit('row-color-changed', section, number);
    }
  },
  data() {
    return {
      rows: this.sockData.getToes(),
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