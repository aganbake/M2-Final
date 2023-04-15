const BASE_URL = "https://digimon-api.vercel.app/api/digimon";
var digimon;
let digi = 0;

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
    let table = document.getElementById("tbody");
    table.innerHTML = "";
    let digi = 0;
    for (let digimon of data) {
      let tabla = document.createElement("tr");
      tabla.innerHTML = `
      <td>${digi}</td>
      <td>${digimon.name}</td>
      <td>${digimon.level}</td>
      <td><img class="digimon-table" width="15%" src="${digimon.img}"></td>
    `;
      $("#tbody").append(tabla);
      digi++;
    }
  }
}

function search() {
  let digi = 0;
  let name = document.getElementById("needDigimon").value;
  fetch(BASE_URL + "/name/" + name)
    .then((results) => results.json())
    .then((data) => {
      console.log(data);
      createDigimon(data);
    })
    .catch((error) => console.log(error));

  function createDigimon(data) {
    let tabla = document.createElement("tr");
    tabla.innerHTML = `
      <td>${digi}</td>
      <td>${data[0].name}</td>
      <td>${data[0].level}</td>
      <td><img class="digimon-table" width="15%" src="${data[0].img}"></td>
    `;
    let table = document.getElementById("tbody");
    table.innerHTML = "";
    $("#tbody").append(tabla);
  }
}

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 1000) {
      $("#btn-back-to-top").fadeIn();
    } else {
      $("#btn-back-to-top").fadeOut();
    }
  });
  $("#btn-back-to-top").click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      400
    );
    return false;
  });
});
