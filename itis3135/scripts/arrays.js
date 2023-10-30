let persons = [];
let salaries = [];

document.getElementById("addButton").addEventListener("click", addSalary);
document.getElementById("displayResults").addEventListener("click", displayResults);
document.getElementById("displaySalaries").addEventListener("click", displaySalary);


function addSalary(){
    const employName = document.getElementById("employName");
    const employSalary = document.getElementById("employSalary");

    // code for testing 
   const salary =  employSalary.value.trim();
   const name = employName.value.trim();

    if(name === "" || salary < 0 || isNaN(salary)){
        alert("Please enter a vaild input");
        return;
    }
    persons.push(name);
    salaries.push(parseFloat(salary));

    employName.value = "";
    employSalary.value  = "";
    document.getElementById("employName").focus();
}

function displayResults(){
 let total = 0;
 let max = 0;
 let count = 0;
    //calc average
    for(let i = 0; i < salaries.length; i ++){
         total =+ salaries[i];
        if(salaries[i] > max){
            max = salaries[i];
        }
        count++;
    }
    let average = total / count ; 

    document.getElementById("averageSalary").textContent = `${average}`;
    document.getElementById("maxSalary").textContent = `${max}`;
}

function displaySalary(){
    const tableResults = document.getElementById("results_table");
    tableResults.innerHTML = "<tr><th>Name</th><th>Salary</th></tr>";

    for(let i = 0; i < persons.length; i++){
        var row = tableResults.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.textContent = persons[i];
        cell2.textContent = salaries[i];
    }
}