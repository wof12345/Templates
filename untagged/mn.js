for (let i = 1; i <= 10; i++) {
  let main = "";
  for (let j = 1; j <= 10; j++) {
    if (j < 6 && i < 6) {
      if ((j === 1 && i % 2 === 0) || (j === 5 && i % 2 === 0)) {
        main += " ";
      } else main += "*";
    } else main += "-";
  }
  console.log(main);
}
