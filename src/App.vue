<template>
    <MyHeader />
    <main class="mx-auto max-w-xs md:max-w-lg">
        <h1 class="mt-4 text-center text-xl font-bold">1A2B 猜數字</h1>
        <div class="mx-auto my-4 w-2/3 text-center text-2xl font-bold">
            <div
                class="h-16 rounded-3xl px-6 py-4 leading-[2rem] [box-shadow:_inset_2px_2px_5px_#b8b9be,inset_-3px_-3px_7px;]"
            >
                {{ game.input }}
            </div>
        </div>
        <!-- Tip block -->
        <div class="my-4">
            <div
                class="scrollbar mx-4 h-24 divide-y divide-black/10 overflow-y-scroll rounded border border-[#b0b0b0] shadow-inner shadow-[#b8b9be]"
                ref="tipDiv"
            >
                <p
                    class="relative text-center text-xl font-bold leading-[3rem]"
                    v-for="(tip, i) in game.tips"
                    :key="i"
                >
                    <span class="absolute left-4">{{ i + 1 }}</span>
                    <span class="text-blue-600">{{ tip.guessNum }}: </span>
                    <span class="text-lime-600">{{ tip.a }}</span
                    >A <span class="text-lime-600">{{ tip.b }}</span
                    >B
                </p>
            </div>
        </div>
        <div class="mx-auto grid grid-cols-3 gap-y-4 gap-x-2 md:gap-x-4">
            <BaseButton
                v-for="i in nums"
                :key="i"
                :data-num="i"
                @click="handleNumButtonClick"
                >{{ i }}</BaseButton
            >
            <BaseButton @click="handleBackspaceButtonClick">
                <BackspaceIcon class="inline-block h-6 w-6" />
            </BaseButton>
            <BaseButton @click="handleTrashButton">
                <TrashIcon class="inline-block h-6 w-6" />
            </BaseButton>
        </div>
        <div class="my-4">
            <BaseButton @click="handleGuessButtonClick"> 猜！ </BaseButton>
        </div>
    </main>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue';
import BaseButton from './components/base-button.vue';
import MyHeader from './components/my-header.vue';
import { BackspaceIcon, TrashIcon } from '@heroicons/vue/solid';
import { useGame } from './store/game-instance';
import { useGameConfig } from './store/game-config';

const game = useGame();
const config = useGameConfig();
const nums = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
const tipDiv = ref<HTMLDivElement>();
function handleNumButtonClick(event: Event) {
    if (game.input.length === config.length) {
        return;
    }
    const target = event.target as HTMLElement;
    const str = target.dataset.num;
    console.log(str);
    game.setInput(game.input + str);
}

function handleBackspaceButtonClick() {
    game.setInput(game.input.slice(0, game.input.length - 1));
}

function handleTrashButton() {
    game.setInput('');
}

function handleGuessButtonClick() {
    if (game.input.length !== config.length) {
        return;
    }
    const tip = game.game.guess(game.input);
    game.tips.push({ ...tip, guessNum: game.input });
    if (tip.a === config.length) {
        win();
    }
    nextTick(() => {
        tipDiv.value?.scrollTo(0, tipDiv.value.scrollHeight);
    });
}

function win() {
    window.alert('win');
    game.setInput('');
}
</script>
