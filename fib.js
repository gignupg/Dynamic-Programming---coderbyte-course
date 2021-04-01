// Brute-force:
// function fib(n) {
//     if (n <= 0) return 0;
//     if (n <= 2) return 1;

//     return fib(n - 1) + fib(n - 2);
// }

// Time: O(2^n)
// Space: O(n)

// console.log(fib(43));




// Adding memoization
function fib(n, memo = {}) {
    if (memo[n]) return memo[n]
    if (n <= 0) return 0;
    if (n <= 2) return 1;

    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
    return memo[n]
}

// Time: O(2n) = O(n)
// Space: O(n)

console.log(fib(100));

