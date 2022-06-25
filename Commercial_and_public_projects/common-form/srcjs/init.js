function getSeed() {
  url = window.location.href;
  currentSeed = url.split("/")[3];
  // console.log(currentSeed);
  // console.log(window.location.host);
}

function generationPage() {
  mainpageElements1.formGenPage.style.display = "block";
}

let giveID = function () {
  let seed = new Date();
  seed = seed.getTime();

  setTimeout(() => {
    window.location = url + seed;
  }, 1);
};

function closeIt() {
  return "Given data will be lost on reload!";
}

getSeed();

if (currentSeed === "") giveID();

getPossibleData("getAllData");

// function blockInstance() {
//     pagelem.blockHaul.style.display = 'block';
//     console.log('Is blocked!');
// }
