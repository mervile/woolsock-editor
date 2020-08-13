import { ref, computed } from 'vue';

function setColor(color: String) {
    console.log('setColor', color);
    colorState.value.currentColor = color;
}

const getCurrentColor = computed(() => colorState.value.currentColor);
const getCurrentColorValue = () => colorState.value.currentColor;

const colorState = ref({currentColor: '#000000'});

export {
    getCurrentColor,
    getCurrentColorValue,
    setColor
}