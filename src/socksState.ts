import { ref, computed } from 'vue';
import { Sock } from './Sock';

const left = new Sock();
const right = new Sock();
const socks = ref({ left, right });

const getLeftFoot = computed(() => socks.value.left);
const getRightFoot = computed(() => socks.value.right);

const getStitchCountByYarn = (yarnId: string) => {
    return socks.value.left.leftSide.getStitchCountForYarn(yarnId)
    + socks.value.left.rightSide.getStitchCountForYarn(yarnId)
    + socks.value.right.leftSide.getStitchCountForYarn(yarnId)
    + socks.value.right.rightSide.getStitchCountForYarn(yarnId);
};

export {
    getLeftFoot,
    getRightFoot,
    getStitchCountByYarn
}