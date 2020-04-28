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

const pointsSliders = document.querySelectorAll('.point_slider');
const linksSliders = document.querySelectorAll('.section2-wrapper-block2-list-elem_link');

const leftArrowMobile = document.getElementById("left_arrow_mobile");
const rightArrowMobile = document.getElementById("right_arrow_mobile");
let currentSlide = 0;

const leftArrow = document.getElementById("slider_left_arrow");
const rightArrow = document.getElementById("slider_right_arrow");

function setInnerText (n) {
    city.innerHTML = repairParam[n].city;
    city_mobile.innerHTML = repairParam[n].city;
    area.innerHTML = repairParam[n].area;
    area_mobile.innerHTML = repairParam[n].area;
    time.innerHTML = repairParam[n].time;
    time_mobile.innerHTML = repairParam[n].time;
    cost.innerHTML = repairParam[n].cost;
    cost_mobile.innerHTML = repairParam[n].cost;
}

function setNextSlide () {
    changeSlide(currentSlide+1);
}
function setPreviousSlide () {
    changeSlide(currentSlide-1);
}

function changeSlide (n) {
    imgElList[currentSlide].classList.remove("slideOn");
    pointList[currentSlide].classList.remove("active_point");
    linkList[currentSlide].classList.remove("section2-wrapper-block2-list-elem_link--active");
    currentSlide = (n+imgElList.length)%imgElList.length;
    setInnerText(currentSlide);
    imgElList[currentSlide].classList.add("slideOn");
    pointList[currentSlide].classList.add("active_point");
    linkList[currentSlide].classList.add("section2-wrapper-block2-list-elem_link--active")
};

leftArrow.addEventListener('click', setPreviousSlide);
rightArrow.addEventListener('click', setNextSlide);
leftArrowMobile.addEventListener('click', setPreviousSlide);
rightArrowMobile.addEventListener('click', setNextSlide);

pointsSliders.forEach((item, index) => item.addEventListener('click', () => {
    changeSlide (index);
}));

linksSliders.forEach((item, index) => item.addEventListener('click', () => {
    changeSlide (index);
}));
