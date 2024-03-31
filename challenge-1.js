// function string(arr){
//     string(arr)(['The', 'Quick', 'Brown', 'Fox'])
// }

// console.log(string(arr).toUpperCase);

function string(arr) {
    return arr.join(' '); // Join the array elements into a single string separated by spaces
}

let result = string(['The', 'Quick', 'Brown', 'Fox']);
console.log(result.toUpperCase()); //outputto uppercase
