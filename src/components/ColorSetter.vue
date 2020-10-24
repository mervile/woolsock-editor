<template>
    <button @click="callback()">
        <p v-if="title">{{title}}</p>
        <div class="picked-color" :style="{backgroundColor: color}"></div>
    </button>
</template>

<script lang="ts">
import { getCurrentColor } from '../colorState'

export default {
    props: {
        callback: Function,
        title: String
    },
    data() {
      return {
        color: getCurrentColor
      }
    }
}
</script>

<style scoped>
button {
  visibility: hidden;
  position: absolute;
  z-index: 1;
  width: 65px;
  top: -23px;
  padding: 2px 5px 2px 2px;
}

p {
  font-weight: bold;
  margin: 0.6em;
}

li:hover button, ul:hover .section-color-setter {
  visibility: visible;
}

.section-color-setter {
  top: -50px;
  right: 0px;
}

.picked-color {
  border: 1px solid black;
  width: 100%;
  height: 10px;
}
</style>
