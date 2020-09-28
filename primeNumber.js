function is_prime(n) {
    // let result = true;
    // if((typeof a !== 'number') || (typeof b !== 'number')) 
    //     return false;
        
    if (n === 0 || n === 1) {
        return false
    }

    for (let i = 2; i < n ; i++) {        
        if ( n % i === 0) {
            return false
        }
    }

    return true
}
console.log("Answer for 1 : " + is_prime(1));
console.log("Answer for 2 : " + is_prime(2));
console.log("Answer for 5 : " + is_prime(5));
console.log("Answer for 12 : " + is_prime(12));


