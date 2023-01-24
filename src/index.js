import Logo from "./logo.png";
import "./style.css";

const contentDiv = document.getElementById("content");

function buildHomePage() {
  // ----------- Header ----------
  const header = document.createElement("header");

  const heading1 = document.createElement("h1");
  heading1.textContent = "Pizza Hub";

  const tabsContainer = document.createElement("div");

  const homeTab = document.createElement("button");
  homeTab.textContent = "Home";

  const menuTab = document.createElement("button");
  menuTab.textContent = "Menu";

  const contactTab = document.createElement("button");
  contactTab.textContent = "Contact";

  tabsContainer.appendChild(homeTab);
  tabsContainer.appendChild(menuTab);
  tabsContainer.appendChild(contactTab);

  header.appendChild(heading1);
  header.appendChild(tabsContainer);

  header.classList.add("header");

  // ------------ Main ----------
  const mainDiv = document.createElement("div");

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
  mainDiv.classList.add("main");

  infoCard.classList.add("card");

  // ------------- Footer ----------
  const footer = document.createElement("footer");

  const footerText = document.createElement("p");
  footerText.textContent = "Copyright © The Odin Project 2023";

  footer.appendChild(footerText);

  footer.classList.add("footer");

  // -------------------------------
  console.log(contentDiv);
  contentDiv.appendChild(header);
  contentDiv.appendChild(mainDiv);
  contentDiv.appendChild(footer);
}

buildHomePage();
