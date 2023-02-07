import Location from "./restaurant-location.png";

function buildContactPage(mainDiv) {
  const infoCard = document.createElement("div");

  const p1 = document.createElement("p");
  p1.textContent = "📞 123 456 789";

  const p2 = document.createElement("p");
  p2.textContent = "🏠 Hollywood Boulevard 42, Los Angeles, USA";

  const imgContainer = document.createElement("div");

  const locationImg = new Image();
  locationImg.src = Location;
  imgContainer.appendChild(locationImg);

  imgContainer.classList.add("contact-img-container");

  infoCard.appendChild(p1);
  infoCard.appendChild(p2);
  infoCard.appendChild(imgContainer);

  mainDiv.appendChild(infoCard);

  infoCard.classList.add("card");
}

export { buildContactPage };
