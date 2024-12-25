//Task 1 -- Modal refuses to work!
/*
const openModalBtn = document.querySelector('[data-action="open-modal"]');
const closeModalBtn = document.querySelector('[data-action="close-modal"]');
const backdrop = document.querySelector(".backdrop");

function openModal() {
  document.body.classList.add("show-modal");
}

function closeModal() {
  document.body.classList.remove("show-modal");
}

function onBackdropClick(event) {
  if (event.target === backdrop) {
    closeModal();
  }
}

openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
*/

//task 2
//backdrop.addEventListener("click", closeModal);

//task 3
/*
const colorBtn = document.querySelectorAll('input[name="color"]');
colorBtn.forEach((btn) => {
  btn.addEventListener("change", (event) => {
    document.body.style.backgroundColor = event.target.value;
  });
});
*/
//task 4
/*
const nameIn = document.querySelector("#name-input");
const nameOut = document.querySelector("#name-output");

nameIn.addEventListener("input", (event) => {
  const userTxt = event.target.value.trim();
  if (userTxt != "") {
    nameOut.textContent = userTxt;
  } else {
    nameOut.textContent = "незнайомець";
  }
});
*/

//task 4.5? - class changes color does not
/*
const validIn = document.querySelector("#validation-input");

function validateInput() {
  const length = parseInt(validIn.dataset.length, 10);

  if (validIn.value.length === length) {
    validIn.classList.remove("invalid");
    validIn.classList.add("valid");
  } else {
    validIn.classList.remove("valid");
    validIn.classList.add("invalid");
  }
}

validIn.addEventListener("blur", validateInput);
*/

//task 5

const sizeControl = document.querySelector("#font-size-control");
const txt = document.querySelector("#text");
txt.style.fontSize = `${sizeControl.value}px`;

sizeControl.addEventListener("input", (event) => {
  const fontSize = event.target.value;
  txt.style.fontSize = `${fontSize}px`;
});
