let numbers = [1,2,1,4,5,2,3,2,1,4,2,5];

let counts = numbers.reduce((counts,numbers) => {
    counts[numbers] = (counts[numbers] || 0)+1;
    return counts
},{})
console.log("Numbers:",numbers);
console.log("Counts:",counts);