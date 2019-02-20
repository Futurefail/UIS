var contactList = [];

var sampleOne = new sample("Kine S. Nordmann", "+45 555-9090", "kine@noreply.com");
contactList.push(sampleOne);
var sampleTwo = new sample("Ole G. Nordmann", "+45 555-8080", "ole@noreply.com");
contactList.push(sampleTwo);

    function hide(id) {
        var element = document.getElementById(id);
        element.style.display = "none";
    }

    function show(id) {
        var element = document.getElementById(id);
        element.style.display = "inline-block";
    }

    /*--Entries--*/
    var idCounter = 1;


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

    function newContact() {
        var contact = new sample(
            document.getElementById('name').value,
            document.getElementById('number').value,
            document.getElementById('email').value);
            contactList.push(contact);
            var element = document.getElementById('container');
            while (element.firstChild) element.removeChild(element.firstChild);
            list();
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

    function searchFor() {
        let x = document.getElementById('searchInput').value.toUpperCase();
        for (let i=0; i<contactList.length; i++) {
            if (contactList[i].name.toUpperCase().includes(x,0)){
                show(i);
            }else {
                hide(i);
            }
        }
    }

/*--Did not get the input checker to work--*/
    /*
    var mailCheck = document.getElementById("email");
    mailCheck.addEventListener("input", function (event) {
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


window.onload = list;
