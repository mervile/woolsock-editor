<template>
    <ul>
        <row v-for="row in rows" :key="row.id" :stitches="row.stitches"></row>
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
      rows: generateStitches(50, 15, 'foot'),
    }
  }
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