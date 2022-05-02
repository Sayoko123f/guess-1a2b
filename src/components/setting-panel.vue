<template>
    <div class="flex flex-col gap-y-1">
        <p class="font-bold">
            遊戲設定<span class="opacity-60">(修改後將開始新的一局)</span>
        </p>
        <div class="">
            <div class="border-t">
                <p class="pt-4">答案是否允許使用重複的數字</p>
                <div class="ml-8 pb-4">
                    <label>
                        否
                        <input
                            class="form-radio"
                            type="radio"
                            name="allowDuplicateNumber"
                            value="0"
                            :checked="!config.allowDuplicateNumber"
                            @change="handleConfigAllowDuplicateNumberChange"
                        />
                    </label>
                    <label>
                        是
                        <input
                            class="form-radio"
                            type="radio"
                            name="allowDuplicateNumber"
                            value="1"
                            :checked="config.allowDuplicateNumber"
                            @change="handleConfigAllowDuplicateNumberChange"
                        />
                    </label>
                </div>
                <div class="border-t py-4">
                    <label
                        >答案的長度
                        <input
                            class="form-input ml-2 rounded-md"
                            type="number"
                            :value="config.length"
                            min="1"
                            max="10"
                            @change="handleConfigLengthChange"
                        />
                    </label>
                </div>
            </div>
        </div>
        <div class="border-t pt-4">
            <button
                class="rounded-md bg-orange-200/60 px-2 py-1 ring-orange-300/60 hover:shadow-inner hover:ring"
                @click="() => game.newGame(config)"
            >
                重新開始
            </button>
        </div>
        <div class="py-2">
            <span class="group rounded-md px-2 py-1 bg-black text-white"
                >這裡偷看答案
                <mark class="invisible group-hover:visible">{{
                    game.game.ans
                }}</mark>
            </span>
        </div>
    </div>
</template>
<script setup lang="ts">
import { useGameConfig } from '../store/game-config';
import { useGame } from '../store/game-instance';
const config = useGameConfig();
const game = useGame();

function handleConfigAllowDuplicateNumberChange(event: Event) {
    const target = event.target as HTMLInputElement;
    config.setAllowDuplicateNumber(target.value === '1');
    game.newGame(config);
    console.log(config.allowDuplicateNumber);
}

function handleConfigLengthChange(event: Event) {
    const target = event.target as HTMLInputElement;
    config.setLength(parseInt(target.value));
    game.newGame(config);
}
</script>
