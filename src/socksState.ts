import { ref, computed } from 'vue';
import { Sock } from './Sock';

const left = new Sock();
const right = new Sock();
const socks = ref({ left, right });

const getLeftFoot = computed(() => socks.value.left);
const getRightFoot = computed(() => socks.value.right);

export {
    getLeftFoot,
    getRightFoot
}