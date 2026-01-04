function sumFourDivisors(nums: number[]): number {
    let res = 0, count = 0;
    for (let num of nums) {
        count = 0;
        let tempRes = 0;
        for (let i = 1; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                tempRes += i;
                const compl = num / i;
                if (compl !== i) tempRes += (num / i);
                count += (i === num / i ? 1 : 2);
                if (count > 4) break;
            }
        }
        if (count === 4) {
            res += tempRes;
        }
    }
    return res;
};