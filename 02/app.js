function randomNumber(min, max) {
    const newArray = []
    for (let i = 1; i <= 20; i++) {
        const newNumber = Math.round((Math.random() * (max - min)) + min);
        newArray.push(newNumber);
    };
    return newArray;
};

function getLargest(arr, n) {
    const largestNums = [];
    for (let i = 0; i < n; i++) {
        const max = Math.max(...arr);
        largestNums.push(max);
        arr = arr.filter(num => num !== max);
    }
    return largestNums;
}

const arr1 = randomNumber(1, 100);
console.log(getLargest(arr1, 10));

const arr2 = randomNumber(2, 100);
console.log(getLargest(arr2, 10));