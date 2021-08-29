let seed = new Date();
seed = seed.getTime();
const data = { _id: seed + "" };

fetch("http://localhost:3000/uploaddata", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.log('Error:', error);
    });

let giveID = async function() {
    if(window.location.href === "http://localhost:1234/") {
        setTimeout(() => { window.location = window.location.href + seed }, 40)
    }
}

function closeIt() {
    return "Given data will be lost on reload!";
}
window.onbeforeunload = closeIt;

giveID();