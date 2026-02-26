window.addEventListener("load", function () {
    elemekElerese1();
    elemekElerese2();
    elemekElerese3();
    elemekElerese4();
    elemekFormazasa();
    esemenykezeles();
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
    listaElem.innerHTML = " ";

    }