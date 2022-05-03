<template>
    <button
        class="rounded-md bg-orange-200/60 px-2 py-1 font-semibold ring-orange-300/60 hover:shadow-inner hover:ring"
        @click="() => game.newGame(config)"
    >
        重新開始
    </button>
</template>
<script lang="ts" setup>
import { useGame } from '../store/game-instance';
import { useGameConfig } from '../store/game-config';
const game = useGame();
const config = useGameConfig();
</script>
