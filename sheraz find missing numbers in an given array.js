let array = [];

function findMissingNumbers(arr, n) {
    let allNumbers = [];
    for (let i = 1; i <= n; i++) {
        if (!arr.includes(i)) {
            allNumbers.push(i);
        }
    }
    return allNumbers;
}

let missingNumbers = findMissingNumbers(array, 10);
console.log(missingNumbers); 
