function populateItemsCont(Catag) {
  for (let i = 0; i < Catag.length; i++) {
    console.log(Catag[i]);
    let flag = false;
    let time = new Date();

    for (let j = 0; j < 6 && Catag[i][0] !== "Latest"; j++) {
      let unformattedDate = time.getTime();
      let foramttedTime = time.toISOString();
      let number = GENERATERANDOMNUMBER([], 0, 100, "integer");
      let value = GENERATERANDOMNUMBER([], 0, 500, "integer");
      if (j === 3 && !flag) {
        flag = true;
        pageData.features.push({
          stock: "In stock",
          itemLeft: i * number,
          id: unformattedDate,
          img: `./Catagories/${Catag[i][0]}/${j + 1}.jpg`,
          name: "Deer marker 290",
          date: foramttedTime,
          dateUnformatted: unformattedDate,
          price: value + "tk",
          description:
            "orem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos autem voluptates veniam esse quas totam aliquam architecto, officia ullam, earum, deleniti reprehenderit beatae mollitia. Amet, nesciunt praesentium perspiciatis fugit quam omnis in rem dignissimos? Esse, aut quos. Pariatur",
          featureDetail: "orem ipsum dolor sit amet consectetur.",
          tag: Catag[i][0],
        });
      }

      pageData.pageItems.push({
        stock: "In stock",
        itemLeft: i * number,
        id: unformattedDate,
        img: `./Catagories/${Catag[i][0]}/${j + 1}.jpg`,
        name: "Deer marker 290",
        date: foramttedTime,
        dateUnformatted: unformattedDate,
        price: value + "tk",
        description:
          "orem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos autem voluptates veniam esse quas totam aliquam architecto, officia ullam, earum, deleniti reprehenderit beatae mollitia. Amet, nesciunt praesentium perspiciatis fugit quam omnis in rem dignissimos? Esse, aut quos. Pariatur",
        featureDetail: "orem ipsum dolor sit amet consectetur.",
        tag: Catag[i][0],
      });
    }
  }
}

populateItemsCont(pageData.categories);

populateCatagories();
populateHeadline();
populateFeature(pageData.features);
populateItems(pageData.pageItems, "Latest");
updateVariables();
console.log(pageData.pageItems);
console.log(pageData.features);
