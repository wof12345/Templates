const card = document.querySelectorAll(".card");
const container = document.querySelectorAll(".container");
const title = document.querySelector(".title");
const sneaker = document.querySelector(".sneaker img");
const purchase = document.querySelector(".purchase");
const description = document.querySelector(".info h3");
const sizes_inner = document.querySelectorAll(".sizes_inner");

container.forEach((elm, ind) => {
  elm.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    console.log(xAxis, yAxis);

    card[ind].style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  });

  elm.addEventListener("mouseenter", (e) => {
    card[ind].style.transition = "none";
    title.style.transform = "translateZ(150px)";
    sneaker.style.transform = "translateZ(200px) rotateZ(-45deg)";
    description.style.transform = "translateZ(125px)";
    sizes_inner.forEach((elm, ind) => {
      if (ind % 2 === 0) {
        elm.style.transform = "translateZ(200px)";
      } else {
        elm.style.transform = "translateZ(100px)";
      }
    });
    purchase.style.transform = "translateZ(75px)";
  });

  elm.addEventListener("mouseleave", (e) => {
    card[ind].style.transition = "all 0.5s ease";
    card[ind].style.transform = `rotateY(0deg) rotateX(0deg)`;
    title.style.transform = "translateZ(0px)";
    sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
    description.style.transform = "translateZ(0px)";
    sizes_inner.forEach((elm, ind) => {
      elm.style.transform = "translateZ(0px)";
    });
    purchase.style.transform = "translateZ(0px)";
  });
});
//3d hover effect
