const obsahLekceElement = document.querySelectorAll(".lekce-obsah");
const zobrazOkno = (cisloDne) => {
  for (let i=0; i < obsahLekceElement.length; i++) {
    obsahLekceElement[i].style.display = "none";
  }
  let indexDne = cisloDne - 1;
  obsahLekceElement[indexDne].style.display = "block";
  document.querySelector(".lekce-okno").style.display = "block";
}