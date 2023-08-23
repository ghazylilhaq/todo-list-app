"use strict";

const mainTitle = document.querySelector(".main h2");
const inputBox = document.querySelector("#input-box");
const addItem = document.querySelector("#add-button");
const listContainer = document.querySelector("#list-container");

function addtask() {
  const todo = inputBox.value;
  if (todo === "") {
    alert("You must write something!");
  } else {
    const html = ` <li>${todo}<span>&#215;</span></li>`;
    listContainer.insertAdjacentHTML("afterbegin", html);
  }

  inputBox.value = "";
  saveData();
}

addItem.addEventListener("click", function (e) {
  e.preventDefault();
  addtask();
  saveData();
});

listContainer.addEventListener(
  "click",
  function (e) {
    // console.log(e.target.tagName);
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
