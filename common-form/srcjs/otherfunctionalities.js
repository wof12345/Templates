mainpageElements2.editBtnDelete.addEventListener('click', function() {
    let answer = prompt('Type \"yes\" to confirm.');

    if(answer === "yes") {
        console.log(currentSeed);

        uploadData('delete', { seed: currentSeed });
    }
})

mainpageElements2.editBtnResponse.addEventListener('click', function(e) {
    animateCommon([mainpageElements2.responseViewCont], ["height:90%;padding:20px"])
})

mainpageElements2.responseBack.addEventListener('click', function(e) {
    animateCommon([mainpageElements2.responseViewCont], ["height:0;padding:0"])
})