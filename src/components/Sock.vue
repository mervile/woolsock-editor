<template>
  <div>
    <h2>{{title}}</h2>

    <div class="sock-container">
      <sleeve class="sleeve"></sleeve>
      <heel class="heel"></heel>
      <foot class="foot"></foot>
      <toes class="toes"></toes>
    </div>
  </div>
</template>

<script>
import Sleeve from "./Sleeve";
import Heel from "./Heel";
import Foot from "./Foot";
import Toes from "./Toes";

export default {
  components: {
    Sleeve,
    Heel,
    Foot,
    Toes,
  },
  props: {
    title: String,
  },
};
</script>

<style scoped>
.sleeve {
  grid-area: sleeve;
}

.heel {
  grid-area: heel;
}

.foot {
  grid-area: foot;
}

.toes {
  grid-area: toes;
}

.sock-container {
  display: grid;
  grid-template-columns: 155px 210px 545px 150px;
  grid-template-rows: auto;
  grid-template-areas:
    "sleeve sleeve . ."
    "heel foot foot toes";
  margin: 10px;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
  position: relative;
}
</style>