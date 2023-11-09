let fizzBuzzParagraph = document.getElementById("fizzcontent");


let word1 ="Fizz";
let word2 = "Buzz";
let word3 = "BANG!";

function fizzBuzzBang(){

    for(let i = 1; i <= 110; i++){
        let text = "";

        if(i % 3 === 0 ){
           text += word1;
        }

        if (i % 5 === 0){
            text += word2;
        }

        if (i % 7 === 0 ){
            text += word3;

        }

        if(text === ""){
            text += i;
        }
        fizzBuzzParagraph.textContent += (text + ", ");
    } // end for 
}

fizzBuzzBang()