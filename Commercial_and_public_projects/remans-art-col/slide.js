let product_prefab = function (data, placement, position, type) {
  return `<div class="product_container_slide" style="right:-${placement}%;position:${position}">
    <div class="product" id="${data.id} ">
      <img src="./remans-col/artist1.png" alt="" />
      <div class="desc d-flex flex-column p-4 justify-content-between">
        <div class="name pdT">
          <p>Name :</p>
          <p class="pDetail">${data.name}</p>
        </div>
        <div class="cost pdT">
          <p>Cost :</p>
          <p class="pDetail">${data.price}</p>
        </div>
        <div class="stock pdT">
          <p>Stock :</p>
          <p class="pDetail">${data.stock}</p>
        </div>
        <button class="buy btn btn-success">${type}</button>
      </div>
  
   
    </div>
  </div>`;
};

let featured = [
  {
    id: "0",
    name: "saddoge",
    price: "20?",
    stock: "Infinite",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nihil vel ab similique iure? Quos sequi, sint et ipsa dicta provident suscipit fugit nobis quidem. Incidunt libero nobis distinctio eveniet.  ",
  },
  {
    id: "1",
    name: "saddoge",
    price: "20?",
    stock: "Infinite",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nihil vel ab similique iure? Quos sequi, sint et ipsa dicta provident suscipit fugit nobis quidem. Incidunt libero nobis distinctio eveniet.  ",
  },
  {
    id: "2",
    name: "saddoge",
    price: "20?",
    stock: "Infinite",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nihil vel ab similique iure? Quos sequi, sint et ipsa dicta provident suscipit fugit nobis quidem. Incidunt libero nobis distinctio eveniet.  ",
  },
  {
    id: "3",
    name: "saddoge",
    price: "20?",
    stock: "Infinite",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nihil vel ab similique iure? Quos sequi, sint et ipsa dicta provident suscipit fugit nobis quidem. Incidunt libero nobis distinctio eveniet.  ",
  },
];

let slideCont01 = document.querySelector(`.product_slider`);
console.log(slideCont01);

let PageNo = document.querySelector(".page_no");
let circles;

let pageLogics = {
  lastFeatureItem: 0,
  dispositionFactor: 60,
  dispositionTrack: 0,
};

let slideTrackers = [];

populateContainer(featured, slideCont01, 60, "absolute", "buy");

initiateSlides(
  { disposition: 0, track: 0 },
  pageLogics.dispositionFactor,
  2000,
  featured.length,
  slideCont01
);

function populateContainer(collection, containerRef, factor, position, type) {
  for (let i = 0; i < collection.length; i++) {
    // console.log(collection[i]);
    containerRef.innerHTML += product_prefab(
      collection[i],
      i * factor,
      position,
      type
    );

    if (containerRef === slideCont01)
      PageNo.innerHTML += `<div class="circle" data-serial="fc${collection[i].id}"></div>`;
  }
  circles = document.querySelectorAll(".circle");
}

function initiateSlides(
  slideData,
  disposition,
  interval,
  collectionRef,
  containerRef
) {
  slideTrackers.push(
    setInterval(() => {
      slideData.track++;

      if (slideData.track >= collectionRef) {
        slideData.track = 0;
        slideData.disposition = -disposition;
      }

      featuredAnimation(slideData.track);

      slideData.disposition = pageLogics.dispositionTrack;

      // console.log(containerRef);

      dispositionProduct(slideData.disposition, disposition, containerRef);
    }, interval)
  );
}

function dispositionProduct(dispositionData, disposition, containerRef) {
  containerRef.style = `transform:translateX(${-(dispositionData +=
    disposition)}%)`;

  pageLogics.dispositionTrack = dispositionData;
}

// console.log(buyBtns);

function featuredAnimation(command) {
  let last;
  let referenceArr = circles;
  let length = referenceArr.length;

  // console.log(last);

  if (command !== undefined) {
    pageLogics.lastFeatureItem = last = command;
  } else {
    pageLogics.lastFeatureItem += 1;
    last = pageLogics.lastFeatureItem;
  }
  // console.log(last);

  if (last > length - 1) {
    last = pageLogics.lastFeatureItem = 0;
  }

  if (last < 0) {
    pageLogics.lastFeatureItem = last = length - 1;
  }

  dispositionProduct(
    pageLogics.dispositionFactor * (last - 1),
    pageLogics.dispositionFactor,
    slideCont01
  );

  referenceArr[last].style = `background-color: rgba(102, 102, 102, 0.897);`;

  for (let i = 0; i < length; i++) {
    if (i !== last) {
      referenceArr[i].style = ``;
    }
  }

  clearInterval(slideTrackers[0]);
  slideTrackers = [];
  initiateSlides(
    {
      disposition: pageLogics.dispositionFactor * pageLogics.lastFeatureItem,
      track: pageLogics.lastFeatureItem,
    },
    pageLogics.dispositionFactor,
    7000,
    featured.length,
    slideCont01
  );
}
