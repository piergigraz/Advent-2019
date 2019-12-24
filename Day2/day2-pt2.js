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



const targetOutput = 19690720;

//function that generates multiple of 4
const arrayMultiples = (num,length) => {
    const indexes = [0];
    for(let i=0; indexes.length < length ; i++){
        indexes.push(indexes[i]+num);
    }
    return indexes;
}

const indexes = arrayMultiples(4,30);


//program that go through data array using the indexes array

const program = (dataInput) => {
        indexes.map( value => {
        let output = dataInput[value+3];
        let noun = dataInput[value+1];
        let verb = dataInput[value+2];
        switch (dataInput[value]) {
            case 1:               
                dataInput[output] = dataInput[noun] + dataInput[verb];
                break;
                    
            case 2:
                dataInput[output] = dataInput[noun] * dataInput[verb];
                break;
                
            case 99: break; 
            
            }
            
        });
    }


// 

for (let i=0;i<=99;i++){
    for(let j=0;j<=99;j++){
        let dataClone = [...data];
        dataClone[1]= i;
        dataClone[2]= j;
        program(dataClone);
        if(dataClone[0] === targetOutput){
            console.log(`Program ${100*i+j}, Magic smoke levels back to normal`);
        }
        
    }

}
