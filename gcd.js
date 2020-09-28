const gcd = function(a, b){
    if (a == 0) {
    return b;
    }
    while (b != 0) {
        if (a > b) {
            a = a - b;
        } else {
            b = b - a;
        }
    }
    return a
};

console.log("2, 12 divisors of " + gcd(2, 12));
console.log("4, 12 divisors of " + gcd(4, 12));
console.log("10, 45 divisors of " + gcd(10, 45));
console.log("27, 2 divisors of " + gcd(27, 2));
console.log("27, 1 divisors of " + gcd(27, 1));
console.log("13, 32 divisors of " + gcd(13, 32));
// if((typeof a !== 'number') || (typeof b !== 'number')) 
// return false;

// let x = Math.abs(a);
// let y = Math.abs(b);
// while (y) {
//     current = y;
//     y = x % y;
//     x = current;
// } 
// return x;