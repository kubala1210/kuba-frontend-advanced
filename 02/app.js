const newArray = [];
function randomNumber(min, max) {
    for (let i = 1; i <= 20; i++) {
        const newNumber = Math.round((Math.random() * (max - min)) + min);
        newArray.push(newNumber);
    };
    console.log(newArray);
};

randomNumber(1, 100);

function getLargest(arr, n) {
    const largestNums = [];
    for (let i = 0; i < n; i++) {
        const max = Math.max(...arr);
        largestNums.push(max);
        arr = arr.filter(num => num !== max);
    }
    return largestNums;
}

console.log(getLargest(newArray, 10));