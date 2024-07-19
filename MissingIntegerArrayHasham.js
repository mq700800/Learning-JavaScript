let arr = [1, 2, 4, 6, 7, 9, 10];

function missNbr(arr) {
  let missingNbrs = [];
  for (let i = 1; i <= 10; i++) {
    if (!arr.includes(i)) {
      missingNbrs.push(i);
    }
  }
  return missingNbrs.length > 0
    ? missingNbrs
    : "No missing numbers found";
}

const missingNbrs = missNbr(arr);
console.log(missingNbrs);