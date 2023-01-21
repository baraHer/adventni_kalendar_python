const obsahLekceElement = document.querySelectorAll(".lekce-obsah");
const oknoLekce = document.querySelector(".lekce-okno")
const oknoLekcePozadi = document.querySelector(".okno-pozadi")

const tlacitkoPredchozi = document.querySelector(".button-prev")
const tlacitkoDalsi = document.querySelector(".button-next")
let cisloZobrazeneLekce

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
    else if (cisloDne === 24) {
        tlacitkoDalsi.style.display = "none"
    }

    oknoLekce.style.display = "block";
    oknoLekcePozadi.style.display = "block";
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
}

const vyberNahodneCislo = () => {
    let cislo = Math.floor(Math.random()*24) + 1
    return cislo
}

function valiDate(day){
	let mesicKdySeKalendarAplikuje = 1 ; /* Nastavit cislo podle mesice 0-11 (0 = Leden, 1 unor,prosinec = 11 aj.) */
	const today = new Date();

	if(	today.getDate() >= day && today.getMonth() == mesicKdySeKalendarAplikuje){
		return true;
	}
	else{
		return false;
	}
}
