// for testing access to scripts
function testScript(){
    alert("Hey my script is running");
}
// date function 
function  dateTime(){
    const time = new Date();
    const currentDateTime = time.toLocaleString();
    console.log(currentDateTime);

    document.querySelector('#datetime').textContent = currentDateTime;
}

function userPromt(){
   const userName = document.getElementById("username").value;
   const userFeeling = document.getElementById("userfeeling").value;
   alert(`The Groovy Spiders's welcomes you ${userName}, We're glad you are doing  ${userFeeling} `);
}

function polygon(){
    var number = Math.abs(Math.round(document.getElementById("userShape").value));
    if(number == 1){
        alert("The name of the polygon is henagon");
    }
    else if(number == 2){
        alert("The name of the polygon is bigon");
    }
    else if(number == 3){
        alert("The name of the polygon is trigon");
    }
    else if(number == 4){
        alert("The name of the polygon is tetragon");
    }
    else if(number == 5){
        alert("The name of the polygon is pentagon");
    }
    else if(number == 6){
        alert("The name of the polygon is hexagon");
    }
    else if(number == 7){
        alert("The name of the polygon is heptagon");
    }
    else if(number == 8){
        alert("The name of the polygon is octogon");
    }
    else if(number == 9){
        alert("The name of the polygon is nonagon");
    }
    else if(number == 10){
        alert("The name of the polygon is undecagon");
    }
}
    function spiderInsult(){
        alert("Even spiders don't like you");
    }

    function spiderJoke(){
        alert("What's a spider's favorite pastime? fly fishing");
    }

    function spiderFavouriteNumber(){
        var randomNumber = Math.floor(Math.random() * 99);
        alert(`A spider's favourite number is ${randomNumber}`);
    }

    function spiderCalc(){
        var randomNumber1 = Math.floor(Math.random() * 99);
        var randomNumber2 = Math.floor(Math.random() * 99);
        var calc = randomNumber1 + randomNumber2;
        alert(`Spiders are very smart! did you know that they can add \n ${randomNumber1} + ${randomNumber2} = ${calc}`);
    }

