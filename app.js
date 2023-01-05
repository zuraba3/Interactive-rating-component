"use strict";

let numbers = document.querySelectorAll(".container__buttons");
let submit = document.querySelector(".container__button");
let selectedNumber = null;
let selected = document.querySelector(".para");
let container1 = document.querySelector(".container");
let container2 = document.querySelector(".container__thanks");

numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    clearChecked();
    number.classList.add("checked");
    selectedNumber = +e.target.innerText;
    selected.innerText = `You selected ${selectedNumber} out of 5`;
  });
});

function clearChecked() {
  numbers.forEach((number) => {
    number.classList.remove("checked");
  });
}

submit.addEventListener("click", () => {
  if (typeof selectedNumber === "number") {
    container1.style.display = "none";
    container2.style.display = "block";
  }
});
