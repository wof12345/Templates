function obCAllback(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            entry.target.style = `transform: translateX(50%);opacity:0;transition:.7s;`;
        } else {
            entry.target.style = `transfrom:translateX(-50%);opacity:1;transition:.7s;`;
        }
    })
}


let observer = new IntersectionObserver(obCAllback, {
    root: null,
    threshold: 0.02
})

index.showcase.forEach(element => {
    observer.observe(element);
});