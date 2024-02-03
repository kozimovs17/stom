let searchicon = document.querySelector(".search-icon");
let searchx = document.querySelector(".search-x");
let searchinp = document.querySelector(".search-inp");
let menubtn = document.querySelector(".menu-btn");

searchicon.addEventListener("click", () => {
    searchx.style.display = `block`;
    searchinp.style.display = `block`;
    searchicon.style.display = `none`;
    menubtn.style.display = `none`;
});

searchx.addEventListener("click", () => {
    searchx.style.display = `none`;
    searchinp.style.display = `none`;
    searchicon.style.display = `block`;
    menubtn.style.display = `block`;
});

/****************************search-finish********************************/

let navbar = document.querySelector(".navbar");
let phone = document.querySelector(".phone-item");
let prodentmenu = document.querySelector(".prodent-menu");
let nav = document.querySelector("nav");
let n = 0;
let x = 0;

navbar.addEventListener("click", () => {
    n++;
    if (n % 2 != 0) {
        nav.style.display = `flex`;
        prodentmenu.style.display = `none`;

    } else {
        nav.style.display = `none`;
    }
});

phone.addEventListener("click", () => {
    x++;
    if (x % 2 != 0) {
        prodentmenu.style.display = `flex`;
        nav.style.display = `none`;
    } else {
        prodentmenu.style.display = `none`;
    }
});

/**********************************menu-finish*************************************/
let form = document.querySelector("form");
let number = document.getElementById("number");
let fullName = document.getElementById("name");
let message = document.getElementById("message");
let counts = document.querySelectorAll(".contact-inp");

function sendEmail() {
    let bodyMessage = `FullName: ${fullName.value}<br> Number: ${number.value}<br> Message: ${message.value}<br>`
    Email.send({
        // SecureToken : "b55af08e-69d7-46c7-8bda-e4cd4db22116",
        Host: "smtp.elasticemail.com",
        Username: "email.email.ru",
        Password: "password",
        To: 'email.email.ru',
        From: "email.email.ru",
        Subject: "This your subject",
        Body: bodyMessage
    }).then(
        message => {
            if (message == "OK") {
                Swal.fire({
                    title: "Успех",
                    text: "Ваше сообщение успешно отправлено",
                    icon: "Успех"
                });
            }
        }
    );
}

function checkInputs(){
    for(let count of counts){
        if(count.value == ""){
            count.classList.add("error");
            count.parentElement.classList.add("error");
        }

        count.addEventListener("keyup", () =>{
            if(count.value != ""){
                count.classList.remove("error");
                count.parentElement.classList.remove("error");
            }else{
                count.classList.add("error");
                count.parentElement.classList.add("error");
            }
        });
    }
}

form.addEventListener("submit", (e) =>{
    e.preventDefault();

    checkInputs();  

    if(!fullName.classList.contains("error") && !number.classList.contains("error") && !message.classList.contains("error")){
        sendEmail();
        form.reset();
        return false;
    }
});
/**********************************************contact finish*****************************************************/
let countDownDate = new Date("Feb 14, 2024 00:00:00").getTime();
let q = setInterval(function(){
    let now = new Date().getTime();
    const distance = countDownDate - now; 

    let days = Math.floor( distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days1").innerHTML = days;
    document.getElementById("hours1").innerHTML = hours;
    document.getElementById("minutes1").innerHTML = minutes;
    document.getElementById("seconds1").innerHTML = seconds;

    if(distance < 0){
    clearInterval(x);
    document.getElementById("days1").innerHTML = "00";
    document.getElementById("hours1").innerHTML = "00";
    document.getElementById("minutes1").innerHTML = "00";
    document.getElementById("seconds1").innerHTML = "00";
    }
}, 1000)
/****************************************.tock-timer1 finsih************************************/

let countDownDate2 = new Date("Mar 14, 2024 00:00:00").getTime();
let p = setInterval(function(){
    let now = new Date().getTime();
    const distance = countDownDate2 - now; 

    let days = Math.floor( distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days2").innerHTML = days;
    document.getElementById("hours2").innerHTML = hours;
    document.getElementById("minutes2").innerHTML = minutes;
    document.getElementById("seconds2").innerHTML = seconds;

    if(distance < 0){
    clearInterval(p);
    document.getElementById("days2").innerHTML = "00";
    document.getElementById("hours2").innerHTML = "00";
    document.getElementById("minutes2").innerHTML = "00";
    document.getElementById("seconds2").innerHTML = "00";
    }
}, 1000);

/****************************************.tock-timer2 finsih************************************/

let countDownDate3 = new Date("Apr 14, 2024 00:00:00").getTime();
let k = setInterval(function(){
    let now = new Date().getTime();
    const distance = countDownDate3 - now; 

    let days = Math.floor( distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days3").innerHTML = days;
    document.getElementById("hours3").innerHTML = hours;
    document.getElementById("minutes3").innerHTML = minutes;
    document.getElementById("seconds3").innerHTML = seconds;

    if(distance < 0){
    clearInterval(p);
    document.getElementById("days3").innerHTML = "00";
    document.getElementById("hours3").innerHTML = "00";
    document.getElementById("minutes3").innerHTML = "00";
    document.getElementById("seconds3").innerHTML = "00";
    }
}, 1000);

/****************************************.stock-timer2 finsih************************************/

let footerLink = document.querySelectorAll(".footer-link-icon");
let footerClientLinks = document.querySelector(".footer-links");
let footerServicesLinks1 = document.getElementById("footer-services-links1");
let footerServicesLinks2 = document.getElementById("footer-services-links2");
let g = 0;
let h = 0;
footerLink[0].addEventListener("click", () =>{
    g++;
    if(g % 2 !=0){
        footerClientLinks.style.display = 'flex';
        footerLink[0].style.transform = `rotate(${45}deg)`;   
    }else{
        footerClientLinks.style.display = 'none';
        footerLink[0].style.transform = `rotate(${0}deg)`;
    }
});

footerLink[1].addEventListener("click", () =>{
    h++;
    if(h % 2 !=0){
        footerServicesLinks1.style.display = 'flex';
        footerServicesLinks2.style.display = 'flex';
        footerLink[1].style.transform = `rotate(${45}deg)`;   
    }else{
        footerServicesLinks1.style.display = 'none';
        footerServicesLinks2.style.display = 'none';
        footerLink[1].style.transform = `rotate(${0}deg)`;
    }
})