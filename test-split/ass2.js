let N = 4;
let hash = [];
let star = [];
for(i = 0; i < N; i++) {
    hash += '#';
    star += '*';
}

for(i = 0; i < N; i++) {
    if(i % 2 !== 0) {
        console.log(star);
    } else
        console.log(hash)
}