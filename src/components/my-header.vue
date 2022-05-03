<template>
    <header
        class="flex h-10 items-center justify-center border-b border-black/10 md:justify-end md:px-8"
    >
        <ul class="flex gap-2">
            <li
                class="group relative h-6 w-6 cursor-pointer"
                @click="() => (isRuleModalOpened = true)"
            >
                <book-open-icon
                    class="inline-block h-6 w-6 group-hover:text-black/40"
                />
                <TooltipBubble>說明</TooltipBubble>
            </li>
            <li
                class="group relative h-6 w-6 cursor-pointer"
                @click="() => (isSettingModalOpened = true)"
            >
                <cog-icon
                    class="inline-block h-6 w-6 group-hover:text-black/40"
                />
                <TooltipBubble>設定</TooltipBubble>
            </li>
        </ul>
    </header>
    <Transition
        enter-active-class="duration-300 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="duration-300 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
    >
        <OverlayModal
            v-if="isSettingModalOpened || isRuleModalOpened"
            @close="closeModal"
        >
            <SettingPanel v-if="isSettingModalOpened" />
            <GamerulePanel v-if="isRuleModalOpened" />
        </OverlayModal>
    </Transition>
</template>
<script setup lang="ts">
import { CogIcon } from '@heroicons/vue/solid';
import { BookOpenIcon } from '@heroicons/vue/outline';
import OverlayModal from './overlay-modal.vue';
import { ref } from 'vue';
import SettingPanel from './setting-panel.vue';
import TooltipBubble from './tooltip-bubble.vue';
import GamerulePanel from './gamerule-panel.vue';

const isSettingModalOpened = ref(false);
const isRuleModalOpened = ref(false);

function closeModal() {
    isSettingModalOpened.value = false;
    isRuleModalOpened.value = false;
}
</script>
