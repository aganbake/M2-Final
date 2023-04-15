const BASE_URL = "https://digimon-api.vercel.app/api/digimon";
var digimon;
var digi = 0;

function apiCall(number) {
  fetch(BASE_URL)
    .then((results) => results.json())
    .then((data) => {
      let div = document.createElement("div");
      div.innerHTML = `
      <h1 class="big-heading">${data[number].name}</h1>
      <img class="digimon-img" src=${data[number].img}>
      <h3>Nivel ${data[number].level}</h3>`;
      $(`#Digimon-${digi}`).append(div);
      digi++;
    })
    .catch((error) => console.log(error));
}

function getDigimon() {
  const randomNumber = Math.floor(Math.random() * 209);
  const calDigimon = apiCall(randomNumber);
}

function fillFeatured() {
  for (let i = 0; i < 3; i++) {
    getDigimon();
  }
}

function digimonList() {
  fetch(BASE_URL)
    .then((results) => results.json())
    .then((data) => {
      createDigimon(data);
    })
    .catch((error) => console.log(error));

  function createDigimon(data) {
    for (let digimon of data) {
      let tabla = document.createElement("tr");
      tabla.innerHTML = `
      <td>${digi}</td>
      <td>${digimon.name}</td>
      <td>${digimon.level}</td>
      <td><img width="15%" src="${digimon.img}"></td>
    `;
      $("#tbody").append(tabla);
      digi++;
    }
  }
}

function search() {
  let search = document.getElementById("customSearch").value;
  search = search.toLowerCase();
  console.log(search);
  fetch(BASE_URL + "/name:" + search)
    .then((results) => results.json())
    .then((data) => {
      let div = document.createElement("div");
      div.innerHTML = `
      <h1 class="big-heading">${data[0].name}</h1>
      <img class="digimon-img" src=${data[0].img}>
      <h3>Nivel ${data[0].level}</h3>`;
      $("Digimon-Searched").append(div);
    })
    .catch((error) => console.log(error));
  // buscarDigimon(search);
}

function buscarDigimon(nombre) {
  fetch(BASE_URL + "/name:" + nombre)
    .then((results) => results.json())
    .then((data) => {
      let div = document.createElement("div");
      div.innerHTML = `
      <h1 class="big-heading">${data[0].name}</h1>
      <img class="digimon-img" src=${data[0].img}>
      <h3>Nivel ${data[0].level}</h3>`;
      $("Digimon-Searched").append(div);
    })
    .catch((error) => console.log(error));
}
