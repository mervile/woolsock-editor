<template>
  <div>
    <h1>Woolsock editor</h1>

    <color-picker></color-picker>
    <div class="socks">
      <sock></sock>
    </div>
  </div>
</template>

<script>
import Sock from './components/Sock';
import ColorPicker from './components/ColorPicker';

export default {
  components: {
    Sock,
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