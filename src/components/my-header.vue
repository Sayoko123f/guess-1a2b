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
    <Transition
        enter-active-class="duration-300 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="duration-300 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
    >
        <OverlayModal v-if="isSettingModalOpened" @close="closeSettingModal">
            <SettingPanel></SettingPanel>
        </OverlayModal>
    </Transition>
</template>
<script setup lang="ts">
import { CogIcon } from '@heroicons/vue/solid';
import OverlayModal from './overlay-modal.vue';
import { ref } from 'vue';
import SettingPanel from './setting-panel.vue';

const isSettingModalOpened = ref(false);

function closeSettingModal() {
    isSettingModalOpened.value = false;
}
</script>
