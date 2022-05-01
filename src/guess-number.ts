export interface Rules {
    allowDuplicateNumber?: boolean;
    length?: number;
}

export const defaultRules: Required<Rules> = {
    allowDuplicateNumber: false,
    length: 4, // min:1, max:10
};

export interface Tip {
    a: number;
    b: number;
}

export class GuessNumber {
    r: Required<Rules>;
    ans: string;
    constructor(r: Rules) {
        this.r = Object.assign(defaultRules, r);
        // check length
        if (
            !Number.isSafeInteger(this.r.length) ||
            this.r.length > 10 ||
            this.r.length < 1
        ) {
            throw TypeError('Unexpected rules: length');
        }
        this.ans = '';
        this.generateAnswer();
    }

    generateAnswer(): GuessNumber {
        const nums = '0123456789'.split('');
        this.ans = new Array(this.r.length)
            .fill(null)
            .map(() => {
                const index = getRandomInt(nums.length);
                const choice = nums[index];
                if (!this.r.allowDuplicateNumber) {
                    nums.splice(index, 1);
                }
                return choice;
            })
            .join('');
        return this;
    }

    guess(input: string): Tip {
        if (input.length !== this.ans.length) {
            throw Error('Input length must be equal to answer length.');
        }
        const transformString = (str: string) =>
            str.split('').map((val) => ({ val, used: false }));
        const ans = transformString(this.ans);
        const inputs = transformString(input);
        // check A
        let a = 0;
        for (let i = 0; i < ans.length; i++) {
            if (ans[i].val === inputs[i].val) {
                a++;
                ans[i].used = true;
                inputs[i].used = true;
            }
        }
        // check B
        let b = 0;
        for (let i = 0; i < ans.length; i++) {
            if (inputs[i].used) {
                continue;
            }
            const index = ans.findIndex(
                (e) => !e.used && e.val === inputs[i].val
            );
            if (index === -1) {
                continue;
            }
            b++;
            inputs[i].used = true;
            ans[index].used = true;
        }
        return { a, b };
    }
}

/**
 * Return an integer between 0 to max-1.
 * @param max
 * @returns
 */
function getRandomInt(max: number = 10): number {
    return Math.floor(Math.random() * max);
}
