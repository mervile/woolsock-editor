<template>
  <div>
    <h1>Woolsock editor</h1>

    <color-picker></color-picker>
    <div class="socks">
      <half-a-sock title="Left foot left side"></half-a-sock>
      <half-a-sock title="Left foot right side"></half-a-sock>
    </div>
  </div>
</template>

<script>
import HalfASock from './components/HalfASock';
import ColorPicker from './components/ColorPicker';

export default {
  components: {
    HalfASock,
    ColorPicker
  }
};
</script>

<style scoped>
.socks {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
}

[dir="rtl"] ::v-deep(.foot .stitch), [dir="rtl"] ::v-deep(.toes .stitch) {
    transform: rotate(90deg);
}
</style>