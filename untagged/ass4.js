let string = "abcdEIo";

let vowelCount = 0;

function checkElm(elm) {
    let is = false;
    elm = elm.toLocaleLowerCase();
    if(elm === 'a' || elm === 'e' || elm === 'i' || elm === 'o' || elm === 'u') is = true;

    return is;
}

string.split('').forEach(elm => {
    if(checkElm(elm)) {
        vowelCount++;
    } else
        vowelCount = 0;

    if(vowelCount >= 3) {
        console.log('YES');
        return;
    }
})

if(vowelCount < 3) {
    console.log('NO');

}