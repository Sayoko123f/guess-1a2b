import { defineStore } from 'pinia';
import { GuessNumber, Rules, defaultRules, Tip } from '../guess-number';

interface IUserTip extends Tip {
    guessNum: string;
}

interface IState {
    game: GuessNumber;
    tips: Array<IUserTip>;
    input: string;
}

export const useGame = defineStore('game', {
    state: (): IState => ({
        game: new GuessNumber(defaultRules),
        tips: [],
        input: '',
    }),
    actions: {
        newGame(r: Required<Rules>) {
            this.tips = [];
            this.input = '';
            this.game = new GuessNumber(r);
        },
        setInput(str: string) {
            this.input = str;
        },
    },
});
