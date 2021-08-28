let seed = new Date();

let giveID = async function() {
    if(window.location.href === "http://localhost:1234/") {
        setTimeout(() => { window.location = window.location.href + seed.getTime(); }, 40)
    }
}

function closeIt() {
    return "Given data will be lost on reload!";
}
window.onbeforeunload = closeIt;

giveID();