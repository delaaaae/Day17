const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function removeFirstTwo(list) {
    "use strict";
    const array2 = list;
    const [a, b, ...arr] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    
    console.log(arr);

    return array2;
}

console.log(removeFirstTwo(array1));
module.exports = removeFirstTwo;