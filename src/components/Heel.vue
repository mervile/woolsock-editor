<template>
    <ul>
        <row v-for="row in rows" :key="row.id" :stitches="row.stitches"></row>
        <row v-for="row in rows2" :key="row.id" :stitches="row.stitches"></row>
        <row v-for="row in rows3" :key="row.id" :stitches="row.stitches"></row>
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
      rows: generateStitches(13, 10, 'heel'),
      rows2: generateStitches(1, 9, 'heel'),
      rows3: generateStitches(1, 8, 'heel'),
    }
  }
};
</script>

<style scoped>
li {
  text-align: end;
}
</style>