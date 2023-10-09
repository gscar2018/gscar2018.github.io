
   // page creation function
    document.getElementById("userbioinput").addEventListener("submit", function(event){
        event.preventDefault();


    //call validate function 
    // if(validateForm()!= true){
    //     alert("Please fill out document");
    //     return;
    // }

    // user info
    let fname = document.getElementById("fname").value;
    let mascot = document.getElementById("mascot").value;
    let imageCaption = document.getElementById("imagecaption").value;
    let personalBack = document.getElementById("personalback").value;
    let professionalBack = document.getElementById("professionalback").value;
    let academicBack = document.getElementById("academicback").value;
    let webdev = document.getElementById("webdev").value;
    let complatform = document.getElementById("complatform").value;
    let funnyThing = document.getElementById("funnything").value;
    let anythingElse = document.getElementById("anythingelse").value;

    //creating page
        var title = document.createElement('h1');
        title.textContent = fname + "'s || " + mascot;
        document.getElementById("userbio").appendChild(title);

    //create image 
        var figure = document.createElement('figure');
        figure.setAttribute('id', 'figureimage');
        figure.setAttribute('class', 'image');
        document.getElementById('userbio').appendChild(figure);
        var image = document.getElementById('image').files[0];

        let imageHolder = document.createElement("img");
        imageHolder.src = URL.createObjectURL(image);
        document.getElementById('figureimage').appendChild(imageHolder);


        // const imageUrl = URL.createObjectURL(image);
        // var text = "<img src=\"" + imageUrl + "\">";
        // var imageHolder = document.createElement("div");
        // document.getElementById("userbioinput").appendChild(imageHolder);
        // imageHolder.setAttribute('id','loadimage');
        // document.getElementById('image').innerHTML = text;
        // URL.revokeObjectURL(imageHolder);
    // caption 
        var figCaption = document.createElement('figcaption');
        figCaption.textContent = imageCaption;
        document.getElementById('userbio').appendChild(figCaption);

    //users info 
        var list = document.createElement('ul')
        document.getElementById("userbio").appendChild(list);

        var personal = document.createElement('li');
        personal.textContent = "Personal Background: " + personalBack;
        document.getElementById('userbio').appendChild(personal);

        var professional = document.createElement('li');
        professional.textContent = "Professional Background: " + professionalBack;
        document.getElementById('userbio').appendChild(professional);

        var academic = document.createElement('li');
        academic.textContent = "Academic Background " + academicBack;
        document.getElementById('userbio').appendChild(academic);

        var web = document.createElement('li');
        web.textContent = "Web Development background: " + webdev;
        document.getElementById('userbio').appendChild(web);

        var platform = document.createElement('li');
        platform.textContent = "Computer Platform: " + complatform;
        document.getElementById('userbio').appendChild(platform);

        //funny and anything else
        if(document.getElementById('funnything').value !== ''){
        var funny = document.createElement('li');
        funny.textContent = "Funny Thing: " + funnyThing;
        document.getElementById('userbio').appendChild(funny);
        }

        if(document.getElementById('anythingelse').value !== ''){
            var any = document.createElement('li');
            any.textContent = "Anything else: " + anythingElse;
            document.getElementById('userbio').appendChild(any);
        }
        // hide form 
        event.target.style.display = 'none';
});


document.getElementById("userbio").addEventListener("reset", function(e){
    e.preventDefault();
    window.location.reload();
});


// identify which new entry to delete
let counter = 1;

//new courses
function newCourse(){

    const newCourse = document.getElementById('newcourse');
    const div = document.createElement('div');
    div.innerHTML = `
    <div class = "course">
        <label> Courses: <input type="text" id="${counter}"></label>
        <button type="button" onclick="deleteCourse(${counter})">Delete</button>
    </div>`;
    newCourse.appendChild(div)
    counter++;
}

//delete
function deleteCourse(counter){
    var numberCourse = document.getElementById(counter);
    numberCourse.parentNode.remove();

 }

 //validation

 function validateForm(){
    const validate = document.getElementById('userbioinput');

    if(validate.fname.value == ""){
        return false;
    }
    if(validate.mascot.value == ""){
        return false;
    }
    if(validate.imageCaption.value == ""){
        return false;
    }
    if(validate.personalBack.value == ""){
        return false;
    }
    if(validate.professionalBack.value == ""){
        return false;
    }
    if(validate.academicBack.value == ""){
        return false;
    }
    if(validate.webdev.value == ""){
        return false;
    }
    if(validate.complatform.value == ""){
        return false;
    }
    return true;
 }




