//ev
let ishovered = false;

const mainfuntion = document.querySelectorAll(".main_box--grid-item");

mainfuntion.forEach(function (mainelement, i, arr) {
  mainelement.addEventListener("mouseover", function () {
    if (!ishovered) {
      document.querySelector(`.grid${i + 1}`).style = `height:40px`;
      ishovered = true;
    }
  });
});

mainfuntion.forEach(function (mainelement, i, arr) {
  mainelement.addEventListener("mouseout", function () {
    if (ishovered) {
      document.querySelector(`.grid${i + 1}`).style = `height:0px`;
      ishovered = false;
    }
  });
});
