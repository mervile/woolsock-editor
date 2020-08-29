import { ref, computed } from 'vue';

function setColor(color: string) {
    console.log('setColor', color);
    colorState.value.currentColor = color;
}

const getCurrentColor = computed(() => colorState.value.currentColor);
const getCurrentColorValue = () => colorState.value.currentColor;

const colorState = ref({currentColor: '#FFFFFF'});

export {
    getCurrentColor,
    getCurrentColorValue,
    setColor
}