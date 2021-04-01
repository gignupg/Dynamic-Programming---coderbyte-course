// Brute-force
// function gridTraveler(m, n) {
//     if (m === 1 && n === 1) return 1;
//     if (m <= 0 || n <= 0) return 0;

//     return gridTraveler(m - 1, n) + gridTraveler(m, n - 1);
// }

/*
length = m + n
O(2^m+n) time
O(m+n) space
*/

// console.log(gridTraveler(100, 200));



// Memoization
function gridTraveler(m, n, memo = {}) {
    if (n > m) [m, n] = [n, m];
    const key = `${m}-${n}`
    
    if (memo[key]) return memo[key];
    if (m === 1 && n === 1) return 1;
    if (m <= 0 || n <= 0) return 0;

    memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo);
    return memo[key];
}

/*
length = m + n
O(m*n) time
O(m+n) space
*/

console.log(gridTraveler(100, 200));

