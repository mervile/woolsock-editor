<template>
    <div>
        <button @click="openModal">Add ball of yarn</button>

        <teleport to="body">
            <div class="modal-container" v-if="isModalOpen">
                <div class="modal">
                    <div class="modal-header">
                        <h1>Add a new ball of yarn</h1>

                        <button @click="closeModal">Close</button>
                    </div>

                    <div>
                        <label for="yarn-color-picker">Color:</label>
                        <input type="color" name="yarn-color-picker" v-model="yarnColor" />
                    </div>

                    <div>
                        <label for="ball-of-yarn-weight-input">Weight (g):</label>
                        <input type="number" name="ball-of-yarn-weight-input" v-model="yarnBallWeight" />
                    </div>

                    <button @click="addNewBallofYarn">Add ball of yarn</button>
                </div>
            </div>
        </teleport>
    </div>
</template>

<script>
import {addBallofYarn} from '../yarnsState';

export default {
    data() {
        return {
            isModalOpen: false,
            yarnColor: '#FFFFFF',
            yarnBallWeight: 0
        }
    },
    methods: {
        openModal() {
            this.isModalOpen = true;
        },
        closeModal() {
            this.isModalOpen = false;
        },
        addNewBallofYarn() {
            addBallofYarn(this.yarnColor, this.yarnBallWeight);
        }
    }
}
</script>

<style scoped>
.modal-container {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
}

.modal-header,
.modal-footer {
    padding: 15px;
    display: flex;
}

.modal-header {
    border-bottom: 1px solid #eeeeee;
    color: black;
    justify-content: space-between;
}

.modal-footer {
    border-top: 1px solid #eeeeee;
    justify-content: flex-end;
}

.modal-fade-enter,
.modal-fade-leave-active {
    opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
    transition: opacity .5s ease
}

form {
    padding: 1em;
}
</style>