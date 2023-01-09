const obsahLekceElement = document.querySelectorAll(".lekce-obsah");
const oknoLekce = document.querySelector(".lekce-okno")

const tlacitkoPredchozi = document.querySelector(".button-prev")
const tlacitkoDalsi = document.querySelector(".button-next")
let cisloZobrazeneLekce

const zobrazOkno = (cisloDne) => {
    for (let i=0; i < obsahLekceElement.length; i++) {
        obsahLekceElement[i].style.display = "none";
    }
    let indexDne = cisloDne - 1;
    obsahLekceElement[indexDne].style.display = "block";
    tlacitkoPredchozi.style.display = "block"
    tlacitkoDalsi.style.display = "block"
    if (cisloDne === 1) {
        tlacitkoPredchozi.style.display = "none"
    }
    else if (cisloDne === 24) {
        tlacitkoDalsi.style.display = "none"
    }

    oknoLekce.style.display = "block";
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
}
