// Store multiple values
let myArr = ["Bob", 25];

// Nest one array whithin another array
let myArr2 = [myArr, ["Sara", 22]]

// Print the arrays
console.log(myArr);         // [ 'Bob', 25 ]
console.log(myArr[1]);      // 25 
console.log(myArr2);        // [ [ 'Bob', 25 ], [ 'Sara', 22 ] ]
console.log(myArr2[1]);     // [ 'Sara', 22 ]
console.log(myArr2[1][0]);  // Sara


let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14]
];

console.log(arr[3]); // equals [[10,11,12], 13, 14]
console.log(arr[3][0]); // equals [10,11,12]
console.log(arr[3][0][1]); // equals 11
console.log(arr[3][2]); // equals 14

/*  
    push()      adds the element at the end
    pop()       removes the last element
    shift()     removes the first element
    unshift()   adds the element at the beginning
*/

console.log(arr); // [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ], [ [ 10, 11, 12 ], 13, 14 ] ]
arr.push(99)
console.log(arr); // [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ], [ [ 10, 11, 12 ], 13, 14 ], 99 ]
arr[0].push(88)
console.log(arr);// [ [ 1, 2, 3, 88 ], [ 4, 5, 6 ], [ 7, 8, 9 ], [ [ 10, 11, 12 ], 13, 14 ], 99 ]
arr.pop()        // removes the last element
console.log(arr); // remove 99
arr.pop()
arr.pop()
console.log(arr);   // [ [ 1, 2, 3, 88 ], [ 4, 5, 6 ] ]

arr.shift()         // removes the first element
console.log(arr);   // [ [ 4, 5, 6 ] ] 
arr.unshift("one")  // adds the element at the beginning
console.log(arr);   // [ 'one', [ 4, 5, 6 ] ] 