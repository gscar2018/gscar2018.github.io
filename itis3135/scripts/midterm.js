const home = document.getElementById('home');
const backgroundClick = document.getElementById("background");
const equipmentClick = document.getElementById("equipment");


backgroundClick.addEventListener("click", showPage())

function showPage(){
    backgroundClick.classList.add("show");
}


function hideSections(){
  let sections = document.getElementsByTagName('section');

    for(let i = 0; i <sections.length; i++){
        //hides each section
        sections[i].classList.add("visability");
    }
}
