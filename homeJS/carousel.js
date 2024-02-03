let slickCarousel = document.querySelector(".slick-carousel");
let slickBtn = document.querySelectorAll(".slick-btn");
let slickframe = document.querySelectorAll(".slick-frame");
let f = 0;

slickBtn[0].addEventListener("click", () => {
    f++;
    if (f > 0) {
        f = 0;
    }

    slickCarousel.style.transform = `translate(${f * 1295}px, 0)`;
});

slickBtn[1].addEventListener("click", () => {
    f--;
    if (f < -slickframe.length + 1) {
        f = -slickframe.length + 1;
    }

    slickCarousel.style.transform = `translate(${f * 1295}px, 0)`;
});
/**services-carousel-mobil**/
slickBtn[2].addEventListener("click", () => {
    f++;
    if (f > 0) {
        f = 0;
    }

    slickCarousel.style.transform = `translate(${f * 372}px, 0)`;
});

slickBtn[3].addEventListener("click", () => {
    f--;
    if (f < -slickframe.length + 1) {
        f = -slickframe.length + 1;
    }

    slickCarousel.style.transform = `translate(${f * 372}px, 0)`;
});
/*******************************************************************************/

slickBtn[4].addEventListener("click", () => {
    f++;
    if (f > 0) {
        f = 0;
    }

    slickCarousel.style.transform = `translate(${f * 650}px, 0)`;
});

slickBtn[5].addEventListener("click", () => {
    f--;
    if (f < -slickframe.length + 1) {
        f = -slickframe.length + 1;
    }

    slickCarousel.style.transform = `translate(${f * 650}px, 0)`;
});

/****************************slick-carousel 1200px***********************************/

slickBtn[6].addEventListener("click", () => {
    f++;
    if (f > 0) {
        f = 0;
    }

    slickCarousel.style.transform = `translate(${f * 1210}px, 0)`;
});

slickBtn[7].addEventListener("click", () => {
    f--;
    if (f < -slickframe.length + 1) {
        f = -slickframe.length + 1;
    }

    slickCarousel.style.transform = `translate(${f * 1210}px, 0)`;
});
/****************************slick-carousel 1200px***********************************/

/*************************************slick-carousel finish*************************************************/



let servicesCarousel = document.querySelector(".services-carousel");
let servicesBtn = document.querySelectorAll(".services-btn");
let servicesframe = document.querySelectorAll(".services-frame");
let y = 0;

servicesBtn[0].addEventListener("click", () => {
    y++;
    if (y > 0) {
        y = 0;
    }

    servicesCarousel.style.transform = `translate(${y * 1340}px, 0)`;
});

servicesBtn[1].addEventListener("click", () => {
    y--;
    if (y < -servicesframe.length + 1) {
        y = -servicesframe.length + 1;
    }

    servicesCarousel.style.transform = `translate(${y * 1340}px, 0)`;
});
/**services-carousel-mobil**/
servicesBtn[2].addEventListener("click", () => {
    y++;
    if (y > 0) {
        y = 0;
    }

    servicesCarousel.style.transform = `translate(${y * 330}px, 0)`;
});

servicesBtn[3].addEventListener("click", () => {
    y--;
    if (y < -servicesframe.length - 1) {
        y = -servicesframe.length - 1;
    }

    servicesCarousel.style.transform = `translate(${y * 330}px, 0)`;
});
/*******************************************************************/

servicesBtn[4].addEventListener("click", () => {
    y++;
    if (y > 0) {
        y = 0;
    }

    servicesCarousel.style.transform = `translate(${y * 630}px, 0)`;
});

servicesBtn[5].addEventListener("click", () => {
    y--;
    if (y < -servicesframe.length ) {
        y = -servicesframe.length ;
    }

    servicesCarousel.style.transform = `translate(${y * 630}px, 0)`;
});

/****************************services-carousel 1200px***********************************/

servicesBtn[6].addEventListener("click", () => {
    y++;
    if (y > 0) {
        y = 0;
    }

    servicesCarousel.style.transform = `translate(${y * 1180}px, 0)`;
});

servicesBtn[7].addEventListener("click", () => {
    y--;
    if (y < -servicesframe.length + 1) {
        y = -servicesframe.length + 1;
    }

    servicesCarousel.style.transform = `translate(${y * 1180}px, 0)`;
});
/****************************services-carousel 1200px***********************************/

/*************************************services-carousel finish*************************************************/


let doctorsCarousel = document.querySelector(".doctors-carousel");
let doctorsBtn = document.querySelectorAll(".doctors-btns");
let doctorsframe = document.querySelectorAll(".doctors-frame");
let z = 0;

doctorsBtn[0].addEventListener("click", () => {
    z++;
    if (z > 0) {
        z = 0;
    }

    doctorsCarousel.style.transform = `translate(${z * 1260}px, 0)`;
    doctorsBtn[0].style.background = `#4797FF`;
    doctorsBtn[0].style.color = `#fff`;
    doctorsBtn[1].style.color = `#4797FF`;
    doctorsBtn[1].style.background = `#fff`;
});

doctorsBtn[1].addEventListener("click", () => {
    z--;
    if (z < -doctorsframe.length + 1) {
        z = -doctorsframe.length + 1;
    }

    doctorsCarousel.style.transform = `translate(${z * 1260}px, 0)`;
    doctorsBtn[0].style.background = `#fff`;
    doctorsBtn[0].style.color = `#4797FF`;
    doctorsBtn[1].style.color = `#fff`;
    doctorsBtn[1].style.background = `#4797FF`;
});

/**doctors-carousel-mobil**/

doctorsBtn[2].addEventListener("click", () => {
    z++;
    if (z > 0) {
        z = 0;
    }

    doctorsCarousel.style.transform = `translate(${z * 330}px, 0)`;
    doctorsBtn[2].style.background = `#4797FF`;
    doctorsBtn[2].style.color = `#fff`;
    doctorsBtn[3].style.color = `#4797FF`;
    doctorsBtn[3].style.background = `#fff`;
});

doctorsBtn[3].addEventListener("click", () => {
    z--;
    if (z < -doctorsframe.length - 5) {
        z = -doctorsframe.length - 5;
    }

    doctorsCarousel.style.transform = `translate(${z * 330}px, 0)`;
    doctorsBtn[2].style.background = `#fff`;
    doctorsBtn[2].style.color = `#4797FF`;
    doctorsBtn[3].style.color = `#fff`;
    doctorsBtn[3].style.background = `#4797FF`;
});

/********************************************************************/

doctorsBtn[4].addEventListener("click", () => {
    z++;
    if (z > 0) {
        z = 0;
    }

    doctorsCarousel.style.transform = `translate(${z * 600}px, 0)`;
    doctorsBtn[2].style.background = `#4797FF`;
    doctorsBtn[2].style.color = `#fff`;
    doctorsBtn[3].style.color = `#4797FF`;
    doctorsBtn[3].style.background = `#fff`;
});

doctorsBtn[5].addEventListener("click", () => {
    z--;
    if (z < -doctorsframe.length - 1) {
        z = -doctorsframe.length -1;
    }

    doctorsCarousel.style.transform = `translate(${z * 600}px, 0)`;
    doctorsBtn[2].style.background = `#fff`;
    doctorsBtn[2].style.color = `#4797FF`;
    doctorsBtn[3].style.color = `#fff`;
    doctorsBtn[3].style.background = `#4797FF`;
});

/***********************************doctors-carousel-tablet finish*****************************************/
doctorsBtn[6].addEventListener("click", () => {
    z++;
    if (z > 0) {
        z = 0;
    }

    doctorsCarousel.style.transform = `translate(${z * 1180}px, 0)`;
    doctorsBtn[4].style.background = `#4797FF`;
    doctorsBtn[4].style.color = `#fff`;
    doctorsBtn[5].style.color = `#4797FF`;
    doctorsBtn[5].style.background = `#fff`;
});

doctorsBtn[7].addEventListener("click", () => {
    z--;
    if (z < -doctorsframe.length + 1) {
        z = -doctorsframe.length + 1;
    }

    doctorsCarousel.style.transform = `translate(${z * 1180}px, 0)`;
    doctorsBtn[4].style.background = `#fff`;
    doctorsBtn[4].style.color = `#4797FF`;
    doctorsBtn[5].style.color = `#fff`;
    doctorsBtn[5].style.background = `#4797FF`;
});

/***********************************doctors-carousel-tablet finish*****************************************/

/***********************************doctors-carousel finish*****************************************/


let stockCarousel = document.querySelector(".stock-items");
let stockBtn = document.querySelectorAll(".stock-btns");
let stockCard = document.querySelectorAll(".stock-card");
let j = 0;

stockBtn[0].addEventListener("click", () =>{
    j++; 
    if(j > 0){
        j = 0;
    }

    stockCarousel.style.transform = `translate(${j * 375}px, 0)`;
    doctorsBtn[0].style.background = `#4797FF`;
    doctorsBtn[0].style.color = `#fff`;
    doctorsBtn[1].style.color = `#4797FF`;
    doctorsBtn[1].style.background = `#fff`;
});

stockBtn[1].addEventListener("click", () =>{
    j--;
    if(j < -stockCard.length + 1){
        j = -stockCard.length + 1;
    }

    stockCarousel.style.transform = `translate(${j * 375}px, 0)`;
    stockBtn[0].style.background = `#fff`;
    stockBtn[0].style.color = `#4797FF`;
    stockBtn[1].style.color = `#fff`;
    stockBtn[1].style.background = `#4797FF`;
});
/******************************************************************/

stockBtn[2].addEventListener("click", () =>{
    j++; 
    if(j > 1){
        j = 1;
    }

    stockCarousel.style.transform = `translate(${j * 370}px, 0)`;
    doctorsBtn[0].style.background = `#4797FF`;
    doctorsBtn[0].style.color = `#fff`;
    doctorsBtn[1].style.color = `#4797FF`;
    doctorsBtn[1].style.background = `#fff`;
});

stockBtn[3].addEventListener("click", () =>{
    j--;
    if(j < -stockCard.length + 2){
        j = -stockCard.length + 2;
    }

    stockCarousel.style.transform = `translate(${j * 370}px, 0)`;
    stockBtn[0].style.background = `#fff`;
    stockBtn[0].style.color = `#4797FF`;
    stockBtn[1].style.color = `#fff`;
    stockBtn[1].style.background = `#4797FF`;
});

/**************************stock-carousel finish***********************************/

