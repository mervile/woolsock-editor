<template>
    <ul>
        <row v-for="row in rows" :key="row.id" :stitches="row.stitches"></row>
        <row v-for="row in rows3" :key="row.id" :stitches="row.stitches"></row>
        <row v-for="row in rows5" :key="row.id" :stitches="row.stitches"></row>
        <row v-for="row in rows7" :key="row.id" :stitches="row.stitches"></row>
        <row v-for="row in rows10" :key="row.id" :stitches="row.stitches"></row>
    </ul>
</template>

<script>
import Row from './Row';
import {generateStitches} from '../stitchData';

export default {
  components: {
    Row
  },
  data() {
    return {
      rows: generateStitches(2, 14, 'toes'),
      rows3: generateStitches(2, 12, 'toes'),
      rows5: generateStitches(2, 10, 'toes'),
      rows7: generateStitches(2, 8, 'toes'),
      rows9: generateStitches(2, 6, 'toes'),
      rows10: generateStitches(1, 4, 'toes'),
    }
  }
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