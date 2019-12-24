 const data = [1,12,2,3,
    1,1,2,3,
    1,3,4,3,
    1,5,0,3,
    2,10,1,19,
    1,19,6,23,
    2,13,23,27,
    1,27,13,31,
    1,9,31,35,
    1,35,9,39,
    1,39,5,43,
    2,6,43,47,
    1,47,6,51,
    2,51,9,55,
    2,55,13,59,
    1,59,6,63,1,10,63,67,2,67,9,71,2,6,71,75,1,75,5,79,2,79,10,83,1,5,83,87,2,9,87,91,1,5,91,95,2,13,95,99,1,99,10,103,1,103,2,107,1,107,6,0,99,2,14,0,0];


//function that generates multiple of 4
const indexes = [0];
for(i=0; indexes.length < 30 ; i++){
    indexes.push(indexes[i]+4);
}

//iteration that go through data array using the indexes array multiple of 4

indexes.map( value => {
    switch (data[value]) {
        case 1:
            let output = data[value+3];
            let inputA = data[value+1];
            let inputB = data[value+2];
            return data[output] = data[inputA] + data[inputB];
            
            
        case 2:
            //same as case 1 but multiply instead of sum;
            output = data[value+3];
            inputA = data[value+1];
            inputB = data[value+2];
            return data[output] = data[inputA] * data[inputB];
            
            
            
        case 99: break; 
        
        }
        
});
// after processing an optcode, jump of 4 blocks and process next optcode
console.log(data[0]);

