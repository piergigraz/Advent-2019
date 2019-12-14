const data = [1,12,2,3,1,1,2,3,1,3,4,3,1,5,0,3,2,10,1,19,1,19,6,23,2,13,23,27,1,27,13,31,1,9,31,35,1,35,9,39,1,39,5,43,2,6,43,47,1,47,6,51,2,51,9,55,2,55,13,59,1,59,6,63,1,10,63,67,2,67,9,71,2,6,71,75,1,75,5,79,2,79,10,83,1,5,83,87,2,9,87,91,1,5,91,95,2,13,95,99,1,99,10,103,1,103,2,107,1,107,6,0,99,2,14,0,0]

const runFunctions = (input) => {
    first(input);
    second(input);
}

const first = (input) => {   
    data[1] = 12;
    data[2] = 2;

    let result = runProgram(data);
    console.log('First Star: ', result);
};

const second = (input) => {
    // because input is a plain text, with number separated by value
    //split method turn the string (plain text) to an array, 
    //on top of that it add .map method to assign at each number, 
    //to be recognize as a number type. I guess.
    let data = input.split(',').map(Number); 
    let desiredResult = 19690720;

    for (let i = 0; i < 100; i++) {
        for (let j = 0; j < 100; j++) {
            let copy = [...data];
            copy[1] = i;
            copy[2] = j;
            let result = runProgram(copy);
            if (result === desiredResult) {
                console.log('Second Star: ', 100 * i + j);
                return;
            }        
        }
    }
    
};

const runProgram = (data) => {
    for (let i = 0; i < data.length-4; i+=4) {
        let opcode = data[i];
        if (opcode === 99) break;

        let inputA = data[i+1];
        let inputB = data[i+2];
        let output = data[i+3];

        let inputAVal = data[inputA];
        let inputBVal = data[inputB];

        let error = false;
        switch (opcode) {
            case 1: data[output] = inputAVal + inputBVal; break;
            case 2: data[output] = inputAVal * inputBVal; break;
            default: error = true; break;
        }

        if (error) {
            console.log('Error');
            break;
        }
    }

    return data[0];
}

runProgram(data);
console.log(data[0])

// data[0] = 842648 -> correct !!!
