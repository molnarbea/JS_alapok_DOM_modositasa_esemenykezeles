window.addEventListener("load", function () {
    elemekElerese1();
    elemekElerese2();
    elemekElerese3();
    elemekElerese4();
    elemekFormazasa();
    esemenykezeles();
    esemenykezeles2();
    esemenykezeles4();
});

function elemekElerese1() {
    let h2Elem=document.getElementById("f1");
    console.log(h2Elem);
}
function elemekElerese2() {
    let ideElem=document.getElementById("ide");
    ideElem.innerHTML = "<p>Jó reggelt!</p>";
}
  
function elemekElerese3() {
    let ideElem = document.getElementsByClassName("ide");
    ideElem[0].innerHTML = "<p>Jó reggelt!</p>";
}

function elemekElerese4() {
    const szamLista = [];
    let listaElem = document.getElementsByClassName("lista");
    listaElem[0].innerHTML += "<ul>";
    for (let index = 0; index < 5; index++) {
        let szam = Math.floor(Math.random()*21+10);
        szamLista.push(szam)
        listaElem[0].innerHTML += "<li>"+szamLista[index]+"</li>";
    }
    listaElem[0].innerHTML += "</ul>";
}

function elemekFormazasa() {
    let listaElem = document.getElementsByClassName("lista");
    listaElem[0].classList.add("formazott");
}

function esemenykezeles() {
    let listaElem = document.getElementsByClassName("lista");
    listaElem[0].addEventListener("click",atrakas)
    
}
function atrakas(){
    let listaElem = document.getElementsByClassName("lista");
    let kattintasDiv = document.getElementsByClassName("kattintasutan");
    kattintasDiv[0].innerHTML = listaElem[0].innerHTML;
    }
function esemenykezeles2(){
    let gomb = document.getElementsByClassName("feladat");
    gomb[0].innerHTML = "<button>OK</button>"
    gomb[0].addEventListener("click", divHozzaadas);
}
function divHozzaadas(){
    let divElem = document.getElementsByClassName("feladat");
    divElem[0].innerHTML += "<div><img src='java.jpg' ></div>";

    let kep = document.querySelector("img:last-child");

    kep.addEventListener("mouseover", function() {
        kep.style.width = "200px";
    });

    kep.addEventListener("mouseout", function() {
        kep.style.width = "100%";
    });
}
function esemenykezeles4() {
    let divs = document.getElementsByClassName("elem");

    for (let i = 0; i < divs.length; i++) {
        divs[i].addEventListener("click", function(event) {
            let tartalom = event.target.innerHTML;

            let megjelenito = document.getElementsByClassName("megjelenito");
            megjelenito[0].innerHTML = tartalom;
        });
    }
}