const executionButton = document.querySelector(`.start_execution`);
const resultClearButton = document.querySelector(`.clear`);

pageElements.choice.addEventListener('change', () => {
    setInfo(getInfo(pageElements.choice.value));

})

executionButton.addEventListener('click', () => {
    clear();
    deflate_floater();
    setTimeout(() => {

        const selectionValue = document.getElementById(`choice`).value;
        let input = document.getElementById(`input`).value;
        let givenArray = input.split(/,| /);
        console.log(givenArray);


        givenarray = numberify(givenArray);
        if (selectionValue === 'Selection-sort') {
            selectionSort(givenArray);
        }
        if (selectionValue === 'Insertion-sort') {
            insertionsort(givenArray);
        }
    }, 500)

})

resultClearButton.addEventListener('click', () => {
    clear();
    deflate_floater();
})

pageElements.floater.addEventListener('click', () => {
    deflate_floater();
})