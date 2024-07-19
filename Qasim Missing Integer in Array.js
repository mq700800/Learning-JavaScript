const originalArray = [1,2,3,4,5,6,7,8,9,10];

const missingArray = [1,4,6,8,9,10];

let result = [];


for (let i = 0; i < originalArray.length; i++) {
    let value = originalArray[i];
    let val = missingArray.includes(value);
    if(!val)
    {
        result.push(value);
    }
}

console.log(result);