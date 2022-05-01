<template>
    <header
        class="flex h-10 items-center justify-center border-b border-black/10 md:justify-end md:px-8"
    >
        <ul class="flex gap-2">
            <li
                class="h-8 w-8 cursor-pointer"
                @click="isSettingModalOpened = true"
            >
                <cog-icon class="inline-block h-6 w-6" />
            </li>
        </ul>
    </header>
    <OverlayModal v-if="isSettingModalOpened" @close="closeSettingModal">
        <div class="">
            <input
                type="number"
                :value="config.length"
                @change="handleConfigLengthChange"
                min="1"
                max="10"
            />
        </div>
    </OverlayModal>
</template>
<script setup lang="ts">
import { CogIcon } from '@heroicons/vue/solid';
import OverlayModal from './overlay-modal.vue';
import { ref } from 'vue';
import { useGameConfig } from '../store/game-config';
import { useGame } from '../store/game-instance';
const isSettingModalOpened = ref(false);
const config = useGameConfig();
const game = useGame();
function closeSettingModal() {
    isSettingModalOpened.value = false;
}

function handleConfigLengthChange(event: Event) {
    const target = event.target as HTMLInputElement;
    config.setLength(parseInt(target.value));
    game.newGame(config);
}
</script>
