function getSeed() {
    url = window.location.href;
    currentSeed = url.split('/')[3];
    // console.log(currentSeed);
    // console.log(window.location.host);
}

function generationPage() {
    mainpageElements1.formGenPage.style.display = 'block';
}


let giveID = function() {
    let seed = new Date();
    seed = seed.getTime();

    setTimeout(() => { window.location = url + seed }, 1)
}

function closeIt() {
    return "Given data will be lost on reload!";
}

getSeed();

if(currentSeed === '')
    giveID();

getPossibleData('data');

function handleTrigger(data1, data2, data3) {
    const data = [currentSeed, toSendToDB, data1, data2, data3];

    setTimeout(() => animateCommon([mainpageElements1.utilityBtns[2]], ['height: 0px;']), 300);

    animateCommon([mainpageElements1.endSection], ['opacity:1;height:200px; margin: 30px; padding: 20px;'])

    mainpageElements1.formGenPage.addEventListener('click', () => {
        window.location = url;
    })


    uploadData('uploaddata', data);
}


// function blockInstance() {
//     pagelem.blockHaul.style.display = 'block';
//     console.log('Is blocked!');

// }

// const data = { _id: seed + "" };

// fetch("http://localhost:3000/uploaddata", {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//     })
//     .then(response => response.json())
//     .then(data => {
//         console.log('Success:', data);
//     })
//     .catch((error) => {
//         console.log('Error:', error);
//     });