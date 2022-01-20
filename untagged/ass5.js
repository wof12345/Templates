let string = "abcdef";

let indexes = [
    [1, 4],
    [1, 5],
    [2, 4],
    [5, 5]
];

function checkElm(elm) {
    let is = false;
    elm = elm.toLocaleLowerCase();
    if(elm === 'a' || elm === 'e' || elm === 'i' || elm === 'o' || elm === 'u') is = true;

    return is;
}

function vowelSeeker(index1, index2) {
    let vowelCount = 0;
    for(i = index1 - 1; i <= index2 - 1; i++) {
        if(checkElm(string[i])) {
            vowelCount++;

        }
    }
    console.log(vowelCount);

}

indexes.forEach(elm => {
    vowelSeeker(elm[0], elm[1]);
})