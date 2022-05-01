import { defineStore } from 'pinia';
import { defaultRules } from '../guess-number';
export const useGameConfig = defineStore('gameConfig', {
    state: () => defaultRules,
    actions: {
        setLength(len: number): boolean {
            if (Number.isSafeInteger(len) && len >= 1 && len <= 10) {
                this.length = len;
                return true;
            }
            return false;
        },
        setAllowDuplicateNumber(allow: boolean) {
            this.allowDuplicateNumber = allow;
        },
    },
});
