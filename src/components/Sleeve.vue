<template>
    <ul @click="changeColor()">
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
      rows: generateStitches(20, 24, 'sleeve', true),
    }
  },
  methods: {
    changeColor() {
      this.rows = this.rows.map(r => {r.stitches.map(s => {s.color = "white"; return s}); return r})
    }
  }
};
</script>
