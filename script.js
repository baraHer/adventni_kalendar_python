const obsahLekceElement = document.querySelectorAll(".lekce-obsah");
const oknoLekce = document.querySelector(".lekce-okno")
const oknoLekcePozadi = document.querySelector(".okno-pozadi")
const oknoBorder = document.querySelector(".okno-border")
const matrixButtony = document.querySelectorAll(".matrix-button")

const tlacitkoPredchozi = document.querySelector(".button-prev")
const tlacitkoDalsi = document.querySelector(".button-next")
let cisloZobrazeneLekce

const datum = new Date();
const den = datum.getDate()

const vyberNahodneCislo = () => {
  let cislo = Math.floor(Math.random()*24) + 1
  return cislo
}

const matrixJedNahoru = (element, translateNumber) => {
  element.style.transform = "translate(0rem, -"+translateNumber+"rem)"
  function matrixNahoru() {
    matrixJedNahoru(element)
  }
  timeout = setTimeout(matrixNahoru, translateNumber*100)
}

const matrixJedDolu = (element) => {
  let translateNumber = vyberNahodneCislo()/3
  let transformTime = 0.4+Math.random()
  element.style.transition = "transform "+ transformTime +"s ease-in-out"
  element.style.transform = "translate(0rem, "+translateNumber+"rem)"
  function matrixDolu() {
    matrixJedDolu(element)
  }
  timeout = setTimeout(matrixDolu, translateNumber*100)
}

for (let i=0; i < matrixButtony.length; i++) {
  let orderCislo = vyberNahodneCislo().toString()
  matrixButtony[i].style.order = orderCislo
  let element = matrixButtony[i]
  matrixJedDolu(element)
}

const zobrazOkno = (cisloDne) => {
    for (let i=0; i < obsahLekceElement.length; i++) {
        obsahLekceElement[i].style.display = "none";
    }
    let indexDne = cisloDne;
    obsahLekceElement[indexDne].style.display = "block";
    tlacitkoPredchozi.style.display = "block"
    tlacitkoDalsi.style.display = "block"
    if (cisloDne === 0) {
        tlacitkoPredchozi.style.display = "none"
    }
    else if (cisloDne === 24 || cisloDne === den) {
        tlacitkoDalsi.style.display = "none"
    }

    oknoLekce.style.display = "block";
    oknoLekcePozadi.style.display = "block";
    oknoBorder.style.display = "block";
    cisloZobrazeneLekce = cisloDne
}

const zobrazNasledujiciLekci = (soucasnaLekce) => {
    zobrazOkno(soucasnaLekce + 1)
}

const zobrazPredchoziLekci = (soucasnaLekce) => {
    zobrazOkno(soucasnaLekce - 1)
}

const zavriOkno = () => {
    oknoLekce.style.display = "none";
    oknoLekcePozadi.style.display = "none";
    oknoBorder.style.display = "none";
}

for (let i=0; i < matrixButtony.length; i++) {
  if (i > den) {
    matrixButtony[i].setAttribute("disabled", true)
  }  
}
