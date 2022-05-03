<template>
    <div
        class="absolute inset-0 z-20 flex items-center justify-center bg-black/40 px-2"
        @click.self.stop="handleClose"
    >
        <div
            class="relative w-full max-w-xs overflow-hidden rounded-md border border-gray-800 bg-slate-50 p-4 shadow-md md:max-w-lg"
        >
            <x-icon
                class="absolute top-4 right-2 inline-block h-6 w-6 text-inherit hover:cursor-pointer hover:text-black/40"
                @click.self.stop="handleClose"
                v-if="showXIcon"
            />
            <slot></slot>
        </div>
    </div>
</template>
<script lang="ts">
import { XIcon } from '@heroicons/vue/solid';
import { defineComponent } from 'vue';
export default defineComponent({
    components: { XIcon },
    emits: ['close'],
    props: {
        autoClose: Boolean,
        autoCloseMs: {
            type: Number,
            default: 650,
        },
        showXIcon: {
            type: Boolean,
            default: true,
        },
    },
    data: () => ({
        timer: 0,
    }),
    mounted() {
        if (this.autoClose) {
            this.timer = window.setTimeout(this.handleClose, this.autoCloseMs);
        }
    },
    beforeUnmount() {
        if (this.timer) {
            window.clearTimeout(this.timer);
        }
    },
    methods: {
        handleClose() {
            this.$emit('close');
        },
    },
});
</script>
