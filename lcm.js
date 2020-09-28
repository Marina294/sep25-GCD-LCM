const lcm = function lcm(input1, input2 ) {

    let input1_Mult = []
    let input2_Mult = []
    let result = 0;
    let found = false

    for (let i = 1; i < 10; i++) {
        input1_Mult.push(i * input1)
        input2_Mult.push(i * input2)
    }

    input1_Mult.forEach(element1 => {
        input2_Mult.forEach(element2 => {
            if (element1 === element2 && !found) {
                result = element2
                found = true
            }
        });
    });
    console.log("multiples of input1 "+ input1 + " : " + input1_Mult);
    console.log("multiples of input2 "+ input2 + " : " + input2_Mult);
    return result

}


console.log(lcm(3,4));