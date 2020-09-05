<template>
    <ul>
        <li
            v-for="yarn in yarnList"
            :key="yarn.id"
            @click="select(yarn.id)"
            :class="{ selected: selected && selected.id === yarn.id }">
            <svg height="80" width="80">
                <circle cx="40" cy="40" r="30" stroke="black" stroke-width="3" :fill="yarn.color" />
            </svg>
            <p>{{getYarnWeight(yarn)}}g</p>
        </li>
    </ul>
</template>

<script>
import { getBallsofYarn, selectYarn, getSelectedYarn } from '../yarnsState'
import { getStitchCountByYarn } from '../socksState';

export default {
    data() {
        return {
            yarnList: getBallsofYarn,
            selected: getSelectedYarn
        }
    },
    methods: {
        select(yarnId) {
            selectYarn(yarnId);
        },
        getYarnWeight(yarn) {
            let weight = yarn.weight;
            let stitchCount = getStitchCountByYarn(yarn.id)
            if (stitchCount >= yarn.stitchLimit) {
                weight = weight - (stitchCount / yarn.stitchLimit);
            }
            return Math.round(weight);
        }
    }
}
</script>

<style scoped>
ul {
    list-style-type: none;
    display: flex;
    padding: 0;
}

li {
    display: flex;
    flex-direction: column;
    align-items: center;
}

p {
    margin: 0px;
    font-weight: bold;
}

.selected {
    border: 1px solid gray;
    box-shadow: 1px 1px 3px grey;
}
</style>