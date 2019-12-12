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


// import data from './input2';


//I need a function that generates indexes multiple of 4
const indexes = [0]; // 0,4,8,12,16...
for(i=0; indexes.length < 30 ; i++){
    indexes.push(indexes[i]+4);
}

// console.log(indexes);

//iteration that go through data array at forth position and go on with multiple of 4



indexes.map( value => {
    switch (data[value]) {
        case 1:
            let output = data[value+3];
            let inputA = data[value+1];
            let inputB = data[value+2];

            return data[output] = data[inputA] + data[inputB];
            // console.log(`index ${value}, risultato ${data[(data[value+3])]} , data originario ${data[value+3]},
            //  addendi: ${data[(data[value+1])]} + ${data[(data[value+2])]}`);
            
            //sum the two numbers at position x,y (x,y are coordinates given by the numbers following the optcode)
            //and place the sum at the position z, which is identified by the third number after the optcode;
        case 2:
            //same as case 1 but multiply instead of sum;
            // return data[data[value+3]] = data[data[value+1]] + data[data[value+2]];
            output = data[value+3];
            inputA = data[value+1];
            inputB = data[value+2];
            return data[output] = data[inputA] * data[inputB];
            
        case 99: break; 
        
        
            // default:
            // console.log(data);
        }
        
});
// after processing an optcode, jump of 4 blocks and process next optcode
console.log(data[0]);


// tutto funziona anche nel mio, il problema era il data[data[value+2]] ecc ecc...
// risolto assegnando in variabili distinte, senza fare matriosche di indici dei vettori
// perchè il valore di data[i] = j ad es. che era a sua volta indice per data[j] 
// es. data[1]= 12 -> data[12] -> 1
