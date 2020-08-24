import { ref, computed } from 'vue';

function toggleRightSideVisibilityState() {
    console.log('toggleRightSideVisibility');
    visibilityState.value.showRightSide = !visibilityState.value.showRightSide;
}

const getRightSideVisibilityState = computed(() => visibilityState.value.showRightSide);

const visibilityState = ref({showRightSide: false});

export {
    getRightSideVisibilityState,
    toggleRightSideVisibilityState
}