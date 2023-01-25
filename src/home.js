import Logo from "./logo.png";

function buildHomePage(mainDiv) {
  const infoCard = document.createElement("div");

  const p1 = document.createElement("p");
  p1.textContent = "Best pizza in the world";

  const p2 = document.createElement("p");
  p2.textContent = "Made with passion since 1958";

  const imgContainer = document.createElement("div");

  const myLogo = new Image();
  myLogo.src = Logo;
  imgContainer.appendChild(myLogo);

  imgContainer.classList.add("img-container");

  infoCard.appendChild(p1);
  infoCard.appendChild(p2);
  infoCard.appendChild(imgContainer);

  mainDiv.appendChild(infoCard);

  infoCard.classList.add("card");
}

export { buildHomePage };
