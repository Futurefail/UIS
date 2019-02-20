var contactList = [];
var idCounter = 1;
var verNumber = false;
var verEmail = false;

function start() {
    var sampleOne = new sample("Kine S. Nordmann", "+45 555-9090", "kine@noreply.com");
    contactList.push(sampleOne);
    var sampleTwo = new sample("Ole G. Nordmann", "+45 555-8080", "ole@noreply.com");
    contactList.push(sampleTwo);
}


function hide(id) {
    var element = document.getElementById(id);
    element.style.display = "none";
}


function show(id) {
    var element = document.getElementById(id);
    element.style.display = "inline-block";
}


function sample(name, number, email) {
    this.name = name;
    this.number = number;
    this.email = email;
    this.id = idCounter++;
}


sample.prototype.toString = function inf(){
    var a = this.name + this.number + this.email;
    return a;
}


function validateEmail(){
    let regx = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,20})$/;
    let str = document.getElementById('email').value;
    if (regx.test(str)) {
        document.getElementById('valE').style.color="green";
        verEmail = true;
    } else {
        document.getElementById('valE').style.color="red";
        verEmail = false;
    }
}


function validateNumber(){
    let regx = /^([0-9 \-()+]+)$/;
    let str = document.getElementById('number').value;
    if (regx.test(str)) {
        document.getElementById('valT').style.color="green";
        verNumber = true;
    } else {
        document.getElementById('valT').style.color="red";
        verNumber = false;
    }
}


function newContact() {
    let name = document.getElementById('name').value;
    let number = document.getElementById('number').value;
    let email = document.getElementById('email').value;
    if (!name == "") {
        if (!number == "" && verNumber || !email == "" && verEmail) {
                var contact = new sample(
                    document.getElementById('name').value,
                    document.getElementById('number').value,
                    document.getElementById('email').value);
                    contactList.push(contact);
                    var element = document.getElementById('container');
                    while (element.firstChild) element.removeChild(element.firstChild);
                    list();
            }else return alert("Almost there, just missing a number or an email.");
    }else return alert("Name plus number or email has to be filled out.");


}


function list() {
    var listLength = contactList.length;
    for (let i=0; i<listLength; i++) {

        document.getElementById('container').innerHTML += "<div id="+i+" display='none'>"
            + "<h3 id=heading>"+ contactList[i].name + "</h3></br><p>"
            + contactList[i].number + "</p></br>"
            + "<a onclick=sendMail href=mailito:" + contactList[i].email + ">" + contactList[i].email + "</a>"
            + "<img src='delete.png' width='30px' height='30px' className='remove' onclick='removeIt("+i+");'></div>" ;

        printPerson(contactList[i]);
    }
}


function removeIt(i) {
    var r = confirm("Are you sure you want to delete?");
    if (r == false) return;

    var c = i;
    if (c == 0) {
        contactList.pop();
    }else {
        contactList.splice(0,c);
    }
    var element = document.getElementById('container');
    while (element.firstChild) element.removeChild(element.firstChild);
    list();
}


/*--this function starts in the beginning. something we dont want.--*/
function searchFor() {
    let x = document.getElementById('searchInput').value.toUpperCase();
    for (let i=0; i<contactList.length; i++) {
        if (contactList[i].name.toUpperCase().includes(x,0)){
            show(i);
        }else if (contactList[i].number.includes(x,0)){
            show(i);
        }else if (contactList[i].email.toUpperCase().includes(x,0)) {
            show(i);
        }else {
            hide(i);
        }
    }
}

/*
    var mailCheck = document.getElementById("email");
    mailCheck.addEventListener("input", function check() {
        if (mailCheck.validity.typeMismatch) {
            mailCheck.setCustomValidity("Not accepted!");
        } else {
            mailCheck.setCustomValidity("");
        }
    });
*/

function hide_show() {
    let y = document.getElementById("settStyle1");
    let z = document.getElementById("settStyle1");
    if (y.style.display && z.style.display === "none") {
        y.style.display = "block";
        z.style.display = "block";
    } else {
        y.style.display = "none";
        z.style.display = "none";
    }
}

function hColor() {
    let h = document.getElementById("heading");
    h.style.color ="blue";
}

/*
    function bColor() {
        let h = document.getElementById("heading");
        h.style.color ="grey";
    }
*/
function printPerson(person) {
    console.log(person.name + " " + person.number + " " + person.email);
}
window.onload=start;
window.onload=list;
