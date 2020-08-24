import { ref, computed } from 'vue';

function toggleSyncChangesState() {
    console.log('toggleSyncChanges');
    syncChangesState.value.syncChanges = !syncChangesState.value.syncChanges;
}

const getSyncChangesState = computed(() => syncChangesState.value.syncChanges);
const isSyncingChanges = () => syncChangesState.value.syncChanges;

const syncChangesState = ref({syncChanges: true});

export {
    getSyncChangesState,
    isSyncingChanges,
    toggleSyncChangesState
}