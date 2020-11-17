const array = [
    [1,  2,  3,  4,  5,  6,  7,  8,  9, 10],
    [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
    [31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
    [41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
    [61, 62, 63, 64, 65, 66, 67, 68, 69, 70],
    [71, 72, 73, 74, 75, 76, 77, 78, 79, 80],
    [81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
    [91, 92, 93, 94, 95, 96, 97, 98, 99, 100]
   
];

function findIndex(n) {                               
    for(let i = 0; i<=array[i].length; i++){
        for(let j=0; j<=array[i].length; j++) {
            if(array[i][j] === n) {
                return [i,j];
            }
        }
    }
}

function sumNeighbors(myArray, [i,j]) {

    const rowLimit = myArray.length-1;
    const columnLimit= myArray[0].length-1;
    let sum = 0;
    
    
    for(let x = Math.max(0,i-1); x<=Math.min(i+1,rowLimit); x++){                                      
        for(let y = Math.max(0,j-1); y<=Math.min(j+1,columnLimit); y++){                                      
              sum+=myArray[x][y];  
        }
    }
    return sum;
}



function sum(n){
    let rowColumn = findIndex(n);
    return sumNeighbors(array, rowColumn);

}

console.log(sum(45));


