/*
Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
*/

// solution
var countBits = function(n) {
    let ar = []
    let v = n
    for (let i = 0; i < n; i++) {
        if (Math.trunc(v) % 2 == 0) {
            ar.push(0)
        } else {
            ar.push(1)
        }
        v = v / 2
        if (Math.trunc(v) == 0) {
            break
        }
    }
    return ar.filter(a => a == 1).length
};
console.log(countBits(10))