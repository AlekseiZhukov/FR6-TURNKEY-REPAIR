const imgElList = document.querySelectorAll('.section2-wrapper-block2_img');
const pointList = document.querySelectorAll('.point_slider');
const linkList = document.querySelectorAll('.section2-wrapper-block2-list-elem_link');
const repairParam = [
    {
        city: "Rostov-on-Don<br>LCD admiral",
        area: "81 m2",
        time: "3.5 months",
        cost: "Upon request"
    },
    {
        city: "Sochi<br>Thieves",
        area: "105 m2",
        time: "4 months",
        cost: "Upon request"
    },
    {
        city: "Rostov-on-Don<br>Patriotic",
        area: "93 m2",
        time: "3 months",
        cost: "Upon request"
    },

];
const city = document.getElementById("textInnerCity");
const area = document.getElementById("textInnerArea");
const time = document.getElementById("textInnerTime");
const cost = document.getElementById("textInnerCost");
const city_mobile = document.getElementById("city_mobile");
const area_mobile = document.getElementById("area_mobile");
const time_mobile = document.getElementById("time_mobile");
const cost_mobile = document.getElementById("cost_mobile");

const point_slide1 = document.getElementById("point_slide1");
const point_slide2 = document.getElementById("point_slide2");
const point_slide3 = document.getElementById("point_slide3");
const link_slide1 = document.getElementById("link_slide1");
const link_slide2 = document.getElementById("link_slide2");
const link_slide3 = document.getElementById("link_slide3");
const leftArrowMobile = document.getElementById("left_arrow_mobile");
const rightArrowMobile = document.getElementById("right_arrow_mobile");
let currentSlide = 0;

//const divSlider = document.querySelector('.slider');
//console.log(divSlider);
const leftArrow = document.getElementById("slider_left_arrow");
const rightArrow = document.getElementById("slider_right_arrow");

function innerText (n) {
    city.innerHTML = repairParam[n].city;
    city_mobile.innerHTML = repairParam[n].city;
    area.innerHTML = repairParam[n].area;
    area_mobile.innerHTML = repairParam[n].area;
    time.innerHTML = repairParam[n].time;
    time_mobile.innerHTML = repairParam[n].time;
    cost.innerHTML = repairParam[n].cost;
    cost_mobile.innerHTML = repairParam[n].cost;
}

function nextSlide () {
    changeSlide(currentSlide+1);
}
function previousSlide () {
    changeSlide(currentSlide-1);
}

function changeSlide (n) {
    imgElList[currentSlide].classList.remove("slideOn");
    pointList[currentSlide].classList.remove("active_point");
    linkList[currentSlide].classList.remove("section2-wrapper-block2-list-elem_link--active");
    currentSlide = (n+imgElList.length)%imgElList.length;
    innerText(currentSlide);
    imgElList[currentSlide].classList.add("slideOn");
    pointList[currentSlide].classList.add("active_point");
    linkList[currentSlide].classList.add("section2-wrapper-block2-list-elem_link--active")
};

leftArrow.addEventListener('click', previousSlide);
rightArrow.addEventListener('click', nextSlide);
leftArrowMobile.addEventListener('click', previousSlide);
rightArrowMobile.addEventListener('click', nextSlide);
point_slide1.addEventListener('click', () => {
    changeSlide (3);
});
point_slide2.addEventListener('click', () => {
    changeSlide (1);
});
point_slide3.addEventListener('click', () => {
    changeSlide (2);
});
link_slide1.addEventListener('click', () => {
    changeSlide (3);
});
link_slide2.addEventListener('click', () => {
    changeSlide (1);
});
link_slide3.addEventListener('click', () => {
    changeSlide (2);
});