import React from "react";
import "./coffee.scss";

const loader = document.querySelector(".loader_coffee");
const main = document.querySelector(".main");

function init() {
  setTimeout(() => {
    // hide loader
    loader.style.opacity = 0;
    loader.style.display = "none";
    //show the content
    main.style.display = "block";
    setTimeout(() => (main.style.opacity = 1), 50);
  }, 4000);
}

init();

const Coffee = () => {
  return;
  <div class="loader_coffee"></div>;
};
