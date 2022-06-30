function populateItemsCont(Catag) {
  for (let i = 0; i < Catag.length; i++) {
    console.log(Catag[i]);

    for (let j = 0; j < 6 && Catag[i][0] !== "Latest"; j++) {
      pageData.pageItems.push({
        stock: "In stock",
        itemLeft: i * GENERATERANDOMNUMBER([], 0, 100, "integer"),
        id: "fi5",
        img: `./Catagories/${Catag[i][0]}/${j + 1}.jpg`,
        name: "Deer marker 290",
        date: "28/09/2019",
        dateUnformatted: 200000988,
        price: GENERATERANDOMNUMBER([], 10, 500, "integer") + "tk",
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
