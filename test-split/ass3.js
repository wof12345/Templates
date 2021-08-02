let givenIntArray = [0, 0, 0, 1] //input

let max = Math.max(...givenIntArray);

givenIntArray.forEach((elm, ind) => {
    if(elm === 0) {
        givenIntArray[ind] = max;
    }
})

console.log(givenIntArray);