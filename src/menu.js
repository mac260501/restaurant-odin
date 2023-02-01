import veggieLovers from "./veggie-lovers.jpg";
import Pepperoni from "./pepperoni.jpg";

function buildMenuPage(mainDiv) {
  const menuCard = document.createElement("div");
  menuCard.classList.add("card");
  menuCard.style.display = "grid";
  menuCard.style.gridTemplateColumns = "repeat(2, 1fr)";
  menuCard.style.gap = "48px";
  menuCard.style.width = "min(800px, 60%)";
  menuCard.style.paddingBottom = "36px";

  menuCard.appendChild(createPizzaCard("Veggie Lovers", veggieLovers));
  menuCard.appendChild(createPizzaCard("Pepperoni", Pepperoni));

  //   const card1 = document.createElement("div");

  //   const veggiePizza = new Image();
  //   veggiePizza.src = veggieLovers;
  //   card1.appendChild(veggiePizza);

  //   const card2 = document.createElement("div");
  //   const pepperoniPizza = new Image();
  //   pepperoniPizza.src = Pepperoni;
  //   card2.appendChild(pepperoniPizza);

  //   const card3 = document.createElement("div");
  //   const pepperoniPizza2 = new Image();
  //   pepperoniPizza2.src = Pepperoni;
  //   card3.appendChild(pepperoniPizza2);

  //   menuCard.appendChild(card1);
  //   menuCard.appendChild(card2);
  //   menuCard.appendChild(card3);

  mainDiv.appendChild(menuCard);
}

function createPizzaCard(name, picture) {
  const card = document.createElement("div");

  const imgContainer = document.createElement("div");
  const img = new Image();
  img.src = picture;
  imgContainer.appendChild(img);
  imgContainer.classList.add("menu-img-container");

  const heading2 = document.createElement("h2");
  heading2.textContent = name;
  heading2.style.textAlign = "center";
  heading2.style.padding = "36px";

  card.appendChild(imgContainer);
  card.appendChild(heading2);

  card.style.boxShadow = "rgba(149, 157, 165, 0.2) 0px 8px 24px";
  card.style.height = "fit-content";

  return card;
}

export { buildMenuPage };
