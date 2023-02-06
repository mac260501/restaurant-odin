import veggieLovers from "./veggie-lovers.jpg";
import Pepperoni from "./pepperoni.jpg";
import pizzaCanadian from "./pizza-canadian.jpg";
import chickenCeasar from "./chicken-ceasar.jpg";

function buildMenuPage(mainDiv) {
  const menuDiv = document.createElement("div");
  menuDiv.classList.add("card");
  menuDiv.style.display = "grid";
  menuDiv.style.gridTemplateColumns = "repeat(auto-fit, minmax(250px, 1fr))";
  menuDiv.style.gap = "48px";

  menuDiv.appendChild(createPizzaItem("Veggie Lovers", veggieLovers));
  menuDiv.appendChild(createPizzaItem("Pepperoni", Pepperoni));
  menuDiv.appendChild(createPizzaItem("Canadian", pizzaCanadian));
  menuDiv.appendChild(createPizzaItem("Chicken Ceasar", chickenCeasar));

  mainDiv.appendChild(menuDiv);
}

function createPizzaItem(name, picture) {
  const menuItem = document.createElement("div");

  const imgContainer = document.createElement("div");
  const img = new Image();
  img.src = picture;
  imgContainer.appendChild(img);
  imgContainer.classList.add("menu-img-container");

  const heading2 = document.createElement("h2");
  heading2.textContent = name;
  heading2.style.textAlign = "center";
  heading2.style.padding = "36px";

  menuItem.appendChild(imgContainer);
  menuItem.appendChild(heading2);

  menuItem.style.boxShadow = "rgba(149, 157, 165, 0.2) 0px 8px 24px";
  menuItem.style.height = "100%";

  return menuItem;
}

export { buildMenuPage };
