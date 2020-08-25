import { ref, computed } from 'vue';

function toggleRightSideVisibilityState() {
    console.log('toggleRightSideVisibility');
    visibilityState.value.showRightSide = !visibilityState.value.showRightSide;
}

function toggleRightFootVisibilityState() {
    console.log('toggleRightFootVisibility');
    visibilityState.value.showRightFoot = !visibilityState.value.showRightFoot;
}


const getRightSideVisibilityState = computed(() => visibilityState.value.showRightSide);
const getRightFootVisibilityState = computed(() => visibilityState.value.showRightFoot);

const visibilityState = ref({showRightSide: false, showRightFoot: false});

export {
    getRightSideVisibilityState,
    toggleRightSideVisibilityState,
    getRightFootVisibilityState,
    toggleRightFootVisibilityState
}