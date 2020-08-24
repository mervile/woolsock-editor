<template>
    <div>
        <label for="sync-changes-toggle">Synchronize all changes</label>
        <input
            type="checkbox"
            name="sync-changes-toggle"
            v-model="syncChanges"
            @change="toggleSyncChanges"
        />
    </div>
</template>

<script>
import { getSyncChangesState, toggleSyncChangesState } from '../syncChangesState';

export default {
    data() {
        return {
            syncChanges: getSyncChangesState
        }
    },
    methods: {
        toggleSyncChanges() {
            toggleSyncChangesState();
        }
    }
}
</script>
