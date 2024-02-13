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

// slickBtn[7].addEventListener("click", () => {
//     f--;
//     if (f < -slickframe.length + 1) {
//         f = -slickframe.length + 1;
//     }

//     slickCarousel.style.transform = `translate(${f * 1210}px, 0)`;
// });
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
let doctorsCircle = document.querySelectorAll("#doctors-circle-btn");
let doctorsArrow = document.querySelectorAll("#doctors-btn-path");
let z = 0;

doctorsBtn[0].addEventListener("click", () => {
    z++;
    if (z > 0) {
        z = 0;
    }

    doctorsCarousel.style.transform = `translate(${z * 1260}px, 0)`;
    doctorsCircle[0].style.fill = `#4797FF`;
    doctorsArrow[0].style.fill = `#fff`;
    doctorsArrow[1].style.fill = `#4797FF`;
    doctorsCircle[1].style.fill = `#fff`;
});

doctorsBtn[1].addEventListener("click", () => {
    z--;
    if (z < -doctorsframe.length + 1) {
        z = -doctorsframe.length + 1;
    }

    doctorsCarousel.style.transform = `translate(${z * 1260}px, 0)`;
    doctorsCircle[0].style.fill = `#fff`;
    doctorsArrow[0].style.fill = `#4797FF`;
    doctorsArrow[1].style.fill = `#fff`;
    doctorsCircle[1].style.fill = `#4797FF`;
});

/**doctors-carousel-mobil**/

doctorsBtn[2].addEventListener("click", () => {
    z++;
    if (z > 0) {
        z = 0;
    }

    doctorsCarousel.style.transform = `translate(${z * 330}px, 0)`;
    doctorsCircle[2].style.fill = `#4797FF`;
    doctorsArrow[2].style.fill = `#fff`;
    doctorsArrow[3].style.fill = `#4797FF`;
    doctorsCircle[3].style.fill = `#fff`;
});

doctorsBtn[3].addEventListener("click", () => {
    z--;
    if (z < -doctorsframe.length - 5) {
        z = -doctorsframe.length - 5;
    }

    doctorsCarousel.style.transform = `translate(${z * 330}px, 0)`;
    doctorsCircle[2].style.fill = `#fff`;
    doctorsArrow[2].style.fill = `#4797FF`;
    doctorsArrow[3].style.fill = `#fff`;
    doctorsCircle[3].style.fill = `#4797FF`;
});

/********************************************************************/

doctorsBtn[4].addEventListener("click", () => {
    z++;
    if (z > 0) {
        z = 0;
    }

    doctorsCarousel.style.transform = `translate(${z * 600}px, 0)`;
    doctorsCircle[4].style.fill = `#4797FF`;
    doctorsArrow[4].style.fill = `#fff`;
    doctorsArrow[5].style.fill = `#4797FF`;
    doctorsCircle[5].style.fill = `#fff`;
});

doctorsBtn[5].addEventListener("click", () => {
    z--;
    if (z < -doctorsframe.length - 1) {
        z = -doctorsframe.length -1;
    }

    doctorsCarousel.style.transform = `translate(${z * 600}px, 0)`;
    doctorsCircle[4].style.fill = `#fff`;
    doctorsArrow[4].style.fill = `#4797FF`;
    doctorsArrow[5].style.fill = `#fff`;
    doctorsCircle[5].style.fill = `#4797FF`;
});

/***********************************doctors-carousel-tablet finish*****************************************/
doctorsBtn[6].addEventListener("click", () => {
    z++;
    if (z > 0) {
        z = 0;
    }

    doctorsCarousel.style.transform = `translate(${z * 1180}px, 0)`;
    doctorsCircle[6].style.fill = `#4797FF`;
    doctorsArrow[6].style.fill = `#fff`;
    doctorsArrow[7].style.fill = `#4797FF`;
    doctorsCircle[7].style.fill = `#fff`;
});

doctorsBtn[7].addEventListener("click", () => {
    z--;
    if (z < -doctorsframe.length + 1) {
        z = -doctorsframe.length + 1;
    }

    doctorsCarousel.style.transform = `translate(${z * 1180}px, 0)`;
    doctorsCircle[6].style.fill = `#fff`;
    doctorsArrow[6].style.fill = `#4797FF`;
    doctorsArrow[7].style.fill = `#fff`;
    doctorsCircle[7].style.fill = `#4797FF`;
});

/***********************************doctors-carousel-tablet finish*****************************************/

/***********************************doctors-carousel finish*****************************************/


let stockCarousel = document.querySelector(".stock-items");
let stockBtn = document.querySelectorAll(".stock-btns");
let stockCard = document.querySelectorAll(".stock-card");
let stockCircle = document.querySelectorAll("#stock-circle-btn");
let stockArrow = document.querySelectorAll("#stock-btn-path");
let j = 0;

stockBtn[0].addEventListener("click", () =>{
    j++; 
    if(j > 0){
        j = 0;
    }

    stockCarousel.style.transform = `translate(${j * 375}px, 0)`;
    stockCircle[0].style.fill = `#4797FF`;
    stockArrow[0].style.fill = `#fff`;
    stockArrow[1].style.fill = `#4797FF`;
    stockCircle[1].style.fill = `#fff`;
});

stockBtn[1].addEventListener("click", () =>{
    j--;
    if(j < -stockCard.length + 1){
        j = -stockCard.length + 1;
    }

    stockCarousel.style.transform = `translate(${j * 375}px, 0)`;
    stockCircle[0].style.fill = `#fff`;
    stockArrow[0].style.fill = `#4797FF`;
    stockArrow[1].style.fill = `#fff`;
    stockCircle[1].style.fill = `#4797FF`;
});
/******************************************************************/

stockBtn[2].addEventListener("click", () =>{
    j++; 
    if(j > 1){
        j = 1;
    }

    stockCarousel.style.transform = `translate(${j * 370}px, 0)`;
    stockCircle[2].style.fill = `#4797FF`;
    stockArrow[2].style.fill = `#fff`;
    stockArrow[3].style.fill = `#4797FF`;
    stockCircle[3].style.fill = `#fff`;
});

stockBtn[3].addEventListener("click", () =>{
    j--;
    if(j < -stockCard.length + 2){
        j = -stockCard.length + 2;
    }

    stockCarousel.style.transform = `translate(${j * 370}px, 0)`;
    stockCircle[2].style.fill = `#fff`;
    stockArrow[2].style.fill = `#4797FF`;
    stockArrow[3].style.fill = `#fff`;
    stockCircle[3].style.fill = `#4797FF`;
});

/**************************stock-carousel finish***********************************/

