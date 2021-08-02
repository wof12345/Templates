let sticks = [1, 2, 3, 4];
let len = sticks.length;

function sumAdd(sumThreshold) {
    let sum;
    console.log('s-', sumThreshold);

    for(i = 0; i < len; i++) {
        sum = sticks[i] + sticks[i + 1];
        sumThreshold--;



        console.log(sum);
    }

    return sum;
}


for(i = 0; i < len; i++) {
    if(i > 2) {
        sumAdd(len - 2);
    }
}

//question felt confusing. Why not add 1 and 2 at the 4th test case.