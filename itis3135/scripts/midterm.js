

function showPage(){
    const home = document.getElementById('home');
    home.classList.add("show");
}


function hideSections(){
  let sections = document.getElementsByTagName('section');

    for(let i = 0; i <sections.length; i++){
        //hides each section
        sections[i].classList.add("visability");
    }
}
// in css make hidden class
// .visability { display: none;
// }

// .show {
// display: auto;
//}