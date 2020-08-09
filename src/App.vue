<template>
  <div>
    <h1>Woolsock editor</h1>

    <div class="socks">
      <sock title="Left foot left side"></sock>
      <sock title="Left foot right side" dir="rtl"></sock>
    </div>
  </div>
</template>

<script>
import Sock from './components/Sock';


/*const store = {
    state: {
        stitches: createStitches()
    },
    mutations: {
        updateStitch (state, stitchId) {
            const stitch = state.stitches.find(row => row.find(s => s.id === stitchId));
            stitch.color = blue;
        },
        updateRow (state, rowId) {
            const row = state.stitches.find(row => row.find(r => r.id === rowId));
            row = row.map(s => {s.color = 'red'});
        },
        updateSection (state, section) {
            state.stitches[section].map(r => {r.stitches.map(s => {s.color = "white"; return s}); return r})
        }
    }
};*/

export default {
  components: {
    Sock
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