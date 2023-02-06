import { buildHomePage } from "./home";
import { buildMenuPage } from "./menu";
import "./style.css";

const contentDiv = document.getElementById("content");
let currentTab;

function buildPage() {
  // ----------- Header ----------
  const header = document.createElement("header");

  const heading1 = document.createElement("h1");
  heading1.textContent = "Pizza Hub";

  const tabsContainer = document.createElement("div");

  const homeTab = document.createElement("button");
  homeTab.textContent = "Home";
  homeTab.classList.add("home-tab");

  const menuTab = document.createElement("button");
  menuTab.textContent = "Menu";
  menuTab.classList.add("menu-tab");

  const contactTab = document.createElement("button");
  contactTab.textContent = "Contact";
  contactTab.classList.add("contact-tab");

  tabsContainer.appendChild(homeTab);
  tabsContainer.appendChild(menuTab);
  tabsContainer.appendChild(contactTab);

  header.appendChild(heading1);
  header.appendChild(tabsContainer);

  header.classList.add("header");

  // // ------------ Main ----------
  const mainDiv = document.createElement("div");
  mainDiv.classList.add("main");

  // Build home page when page first loads
  buildHomePage(mainDiv);
  homeTab.style.borderBottom = "3px solid #FFFFFF";
  currentTab = homeTab;

  // ------------- Footer ----------
  const footer = document.createElement("footer");

  const footerText = document.createElement("p");
  footerText.textContent = "Copyright © The Odin Project 2023";

  footer.appendChild(footerText);

  footer.classList.add("footer");

  // -------------------------------

  contentDiv.appendChild(header);
  contentDiv.appendChild(mainDiv);
  contentDiv.appendChild(footer);

  // ----- Event Listeners for Tabs -------

  homeTab.addEventListener("click", () => {
    if (currentTab !== homeTab) {
      removeAllChildNodes(mainDiv);
      buildHomePage(mainDiv);
      styleTab(homeTab);
      currentTab = homeTab;
    }
  });

  menuTab.addEventListener("click", () => {
    if (currentTab !== menuTab) {
      removeAllChildNodes(mainDiv);
      buildMenuPage(mainDiv);
      styleTab(menuTab);
      currentTab = menuTab;
    }
  });
}

// Helper function to clear main div
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

// Helper function to style tab, while removing style from current tab
function styleTab(newTab) {
  currentTab.style.borderBottom = "none";
  newTab.style.borderBottom = "3px solid #FFFFFF";
}

buildPage();
