function addNewLanguage() {
    
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("lanField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder", "Enter Language");

    let lanob = document.getElementById("lan");
    let lanAddButtonob = document.getElementById("lanAddButton");

    lanob.insertBefore(newNode,lanAddButtonob);
}


function addNewHobbies() {
    
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("hoField");
    newNode.classList.add ("mt-2");
    newNode.setAttribute("placeholder", "Enter Hobbies");

    let hobob = document.getElementById("hobbies");
    let hobAddButtonob = document.getElementById("hobAddButton");

    hobob.insertBefore(newNode,hobAddButtonob);

}

function addNewSkills() {
    
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("skField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder", "Enter Skills");

    let skob = document.getElementById("skill");
    let skAddButtonob = document.getElementById("skAddButton");

    skob.insertBefore(newNode,skAddButtonob);
}

function addNewProject() {

    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("prField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter here")

    let prob = document.getElementById("pr");
    let prAddButtonob = document.getElementById("prAddButton");

    prob.insertBefore(newNode, prAddButtonob);

}

function addNewExperience() {
    
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter here");

    let exob = document.getElementById("ex");
    let exAddButtonob = document.getElementById("exAddButton");

    exob.insertBefore(newNode, exAddButtonob);
}

function addNewEducation() {
    
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("edField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter Your Acadamic Details");


    let edob = document.getElementById("ed");
    let edAddButtonob = document.getElementById("edAddButton");

    edob.insertBefore(newNode, edAddButtonob);
}

//generating cv

function generateCV() {

    let nameField = document.getElementById("nameField").value;

    let nameT = document.getElementById("nameT");

    nameT.innerHTML = nameField;

    //direct

    document.getElementById("nameT1").innerHTML = nameField.toUpperCase();

    //contact
    let phoneField = document.getElementById("phoneField").value;

    document.getElementById("phoneT").innerHTML = phoneField;

    // email
    let emailField = document.getElementById("emailField").value;

    document.getElementById("emailT").innerHTML = emailField

    //address
    let addressField = document.getElementById("addressField").value

    document.getElementById("addressT").innerHTML = addressField;

    //links
    let linkedinField = document.getElementById("linkedinField").value
    document.getElementById("linT").innerHTML = linkedinField;

    let facebookField = document.getElementById("facebookField").value
    document.getElementById("fbT").innerHTML = facebookField;

    //skill
    let sk = document.getElementsByClassName("skField");

    let str2 = "";
    for(let e of sk){
        str2 = str2 +`<li> ${e.value} </li>`;
    }
    document.getElementById("skillT").innerHTML = str2;

    //hobbies
    let ho = document.getElementsByClassName("hoField");

    let str3 = "";
    for(let e of ho){
        str3 = str3 +`<li> ${e.value} </li>`;
    }
    document.getElementById("hobbiesT").innerHTML = str3;

    //language
    let lan = document.getElementsByClassName("lanField");

    let str4 = "";
    for(let e of lan){
        str4 = str4 +`<li> ${e.value} </li>`;
    }
    document.getElementById("languageT").innerHTML = str4;

    //objective
    let ob9 = document.getElementById("objectiveField").value;
    document.getElementById("objectiveT").innerHTML = ob9;

    //education
    let ed = document.getElementsByClassName("edField");

    let str = "";
    for(let e of ed){
        str = str + `<li> ${e.value} </li>`;
    }
    document.getElementById("educationT").innerHTML = str;

    //work Experience
    let wo = document.getElementsByClassName("weField");

    let work = "";
    for(let e of wo){
        work = work+`<li> ${e.value} </li>`;
    }
    document.getElementById("workT").innerHTML = work;

    //project
    let pr = document.getElementsByClassName("prField");

    let str1 = "";
    for(let e of pr){
        str1 = str1 + `<li> ${e.value} </li>`;
    }
    document.getElementById("projectT").innerHTML = str1;

    //Image setting
    let file = document.getElementById("photoField").files[0];

    let reader = new FileReader();
    reader.readAsDataURL(file);
    console.log(reader.result);

    //set photo to template
    reader.onloadend = function () {
        document.getElementById("photoT").src = reader.result;
    }

    //display function 
    let cv = document.getElementById("cv-form");
    cv.style.display = "none";
    let template = document.getElementById("cv-template");
    template.style.display = "block";
}

//print cv
function PrintCV() {
    window.print();
}