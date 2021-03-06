const a = document.querySelector(".zero");
const b = document.querySelector(".one");
const c = document.querySelector(".two");
const d = document.querySelector(".three");
const e = document.querySelector(".four");

const left = document.querySelector(".slides button:first-child");
const right = document.querySelector(".slides button:last-child");

const intervalSlider = setInterval(leftCheck, 3200);

const homePage = document.getElementById("home-page");
const secondSection = document.getElementById("second-box");
const thirdSection = document.getElementById("third-box");
const fiveSection = document.getElementById("five-section");

const rightImage = document.querySelector(".right-images");
const leftImage = document.querySelector(".left-images");
const leftText = document.querySelector(".third-content");
const leftBg = document.querySelector(".third-content-box");

const colorLine = document.querySelector('.menu-line');
const items = document.querySelectorAll('.nav-right li');

const gallery = document.getElementById('gallery');
const backLayout = document.querySelector('.back-layout');
const clickedImg = document.querySelector('.clicked-img');
const choosenClickedImg = document.querySelector('.clicked-img img');
const closeImgBtn = document.querySelector('.close-img-btn');


//gallery function
gallery.addEventListener('click', e => {
  backLayout.style.display = "block";
  // clickedImg.style.display = "block";
  clickedImg.classList.add('clicked-img-active');
  choosenClickedImg.src = `${e.target.currentSrc}`;
  document.body.style.overflow = "hidden";

});

//close Gallery
closeImgBtn.addEventListener('click', e => {
  backLayout.style.display = "none";
  // clickedImg.style.display = "none";
  clickedImg.classList.remove('clicked-img-active');
  document.body.style.overflow = "auto";
  document.body.style.overflowX = "hidden";

});

items[2].addEventListener('click', () => {
  window.scrollTo({
  top: gallery.offsetTop-200,
  left: 0,
  behavior: 'smooth'
});
})

function scrollIndicator(e){
  const currentScrollHeight = e.srcElement.scrollingElement.scrollTop;
  if(currentScrollHeight < secondSection.offsetTop-300){
    colorLineChanger(0);
    colorLine.style.background = "#6FC20C";
  }
  if(currentScrollHeight > secondSection.offsetTop-100){
    colorLineChanger(1);
    colorLine.style.background = "#EBC2C9";
  }
  if(currentScrollHeight > gallery.offsetTop-300){
    colorLineChanger(2);
  }
  if(currentScrollHeight > thirdSection.offsetTop-200){
    colorLineChanger(3);
  }
  if(currentScrollHeight > fiveSection.offsetTop-200){
    colorLineChanger(4);
  }
}

//set left position and properly width to each link
function colorLineChanger(posOfElement){
  colorLine.style.left=items[posOfElement].offsetLeft+"px";
  colorLine.style.width=items[posOfElement].offsetWidth+"px";
}

document.addEventListener('scroll', scrollIndicator);

//slider feature
let arrBox = [a, b, c, d, e];
let arrLeftPos = [-365, 0, 365, 730, 1095];

const homePageHeight = homePage.scrollHeight - homePage.scrollHeight*0.1;
const firstPlusSecondHeight = (homePage.scrollHeight + secondSection.scrollHeight) - (homePage.scrollHeight + secondSection.scrollHeight)*0.2 +400;


const oneTwoThreeHeight = (homePage.scrollHeight + secondSection.scrollHeight + thirdSection.scrollHeight) - (homePage.scrollHeight + secondSection.scrollHeight + thirdSection.scrollHeight)*0.2 +400;

left.addEventListener("click", () => {
  leftCheck();
  clearInterval(intervalSlider);

})

right.addEventListener("click", () => {
  rightCheck();
  clearInterval(intervalSlider);

})

document.addEventListener('keydown', logKey);

document.addEventListener('scroll', scrollEvents);
// document.addEventListener('scroll', scrollFun);

function logKey(e) {
  e = e || window.event;
  if (e.keyCode == '37') {
    leftCheck();
  } else if (e.keyCode == '39') {
    rightCheck();
  }
  clearInterval(intervalSlider);
};

function scrollEvents(e){

  if(e.srcElement.scrollingElement.scrollTop > homePage.scrollHeight*0.4){
    orderBox.classList.remove('order-box-active');

  }
  if(e.srcElement.scrollingElement.scrollTop > firstPlusSecondHeight){
    rightImage.classList.add("anim-active");
    leftImage.classList.add("anim-active");
    leftText.classList.add("anim-active");
    leftBg.classList.add("third-content-box-second-active");
    document.querySelector(".third-content-box-second").classList.add("third-content-box-second-active");
  }
  if(e.srcElement.scrollingElement.scrollTop > oneTwoThreeHeight){
    document.querySelector(".five-left").classList.add("anim-active");
    document.querySelector(".five-adress").classList.add("anim-active");
    document.querySelector(".five-section-title").classList.add("contact-header-active");
  }
}


// POP UP
// const button = document.querySelector("button");
// const popup = document.querySelector(".popup");
// const layout = document.querySelector(".layout");
//
//
// button.addEventListener('click', function(){
//   popup.classList.add("popup-active");
//   layout.classList.add("layout-active");
// })
//
// layout.addEventListener('click', () => {
//   popup.classList.remove("popup-active");
//   layout.classList.remove("layout-active");
// })

const button = document.querySelector("button");
const orderBox = document.querySelector('.order-box');
const closeOrderBox = document.querySelector('.close-order-box');


button.addEventListener('click', () => {
  orderBox.classList.add('order-box-active');
  // orderBox.style.left = "0";
  closeOrderBox.classList.add('close-order-box-active');
});

closeOrderBox.addEventListener('click', () => {
  orderBox.classList.remove('order-box-active');
  closeOrderBox.classList.remove('close-order-box-active');

});



function leftCheck() {
  for (let i = 0; i < 5; i++) {
    arrLeftPos[i] = arrLeftPos[i] - 365;
    arrBox[i].style.left = `${arrLeftPos[i]}px`;
    // arrBox[i].style.zIndex = `${i}`;
    if (arrLeftPos[i] == -730) {
      arrLeftPos[i] = 1095;
      arrBox[i].style.left = `${arrLeftPos[i]}px`;
    }
    if (arrLeftPos[i] == -365) {
      arrBox[i].style.opacity = 0.0;
      // arrBox[i].style.cursor = "default";
    }
    if (arrLeftPos[i] == 1095) {
      // arrBox[i].style.cursor = "default";
    }
    if (arrLeftPos[i] == 730) {
      arrBox[i].style.opacity = 1.0;
      // arrBox[i].style.cursor = "pointer";
    }
    // if (arrLeftPos[i] == 0) {
    //   arrBox[i].style.cursor = "pointer";
    // }
    if (arrLeftPos[i] == 365) {
      arrBox[i].style.transform = "scale(1.2)";
      arrBox[i].style.transition = "0.5s";
    } else {
      arrBox[i].style.transform = "scale(1.0)";
      arrBox[i].style.transition = "0.5s";
    }

  }

}

function rightCheck() {
  for (let i = 0; i < 5; i++) {
    arrLeftPos[i] = arrLeftPos[i] + 365;
    arrBox[i].style.left = `${arrLeftPos[i]}px`;
    // arrBox[i].style.zIndex = `${i}`;
    if (arrLeftPos[i] == 1460) {
      arrLeftPos[i] = -365;
      arrBox[i].style.left = `${arrLeftPos[i]}px`;
    }
    if (arrLeftPos[i] == 1095) {
      arrBox[i].style.opacity = 0.0;
    }
    if (arrLeftPos[i] == 0) {
      arrBox[i].style.opacity = 1.0;
    }
    if (arrLeftPos[i] == 365) {
      arrBox[i].style.transform = "scale(1.2)";
      arrBox[i].style.transition = "0.5s";
    } else {
      arrBox[i].style.transform = "scale(1.0)";
      arrBox[i].style.transition = "0.5s";
    }
  }
  console.log(`${arrBox[0]}: ${arrBox[0].style.left}`);
}

function myNewGit(){

}
