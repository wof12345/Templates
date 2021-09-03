mainpageElements2.editBtnDelete.addEventListener('click', function() {
    let answer = prompt('Type \"yes\" to confirm.');

    if(answer === "yes") {
        console.log(currentSeed);

        uploadData('delete', { seed: currentSeed });
    }
})