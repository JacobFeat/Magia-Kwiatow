const a = document.querySelector(".zero");
const b = document.querySelector(".one");
const c = document.querySelector(".two");
const d = document.querySelector(".three");
const e = document.querySelector(".four");

const left = document.querySelector(".slides button:first-child");
const right = document.querySelector(".slides button:last-child");

const intervalSlider = setInterval(leftCheck, 3200);

const firstSection = document.getElementById("first-box");
const secondSection = document.getElementById("second-box");
const thirdSection = document.getElementById("third-box");

const rightImage = document.querySelector(".right-images");
const leftImage = document.querySelector(".left-images");
const leftText = document.querySelector(".third-content");
const leftBg = document.querySelector(".third-content-box");


let arrBox = [a, b, c, d, e];
let arrLeftPos = [-365, 0, 365, 730, 1095];

// console.log(thirdSection.scrollTop);
const firstPlusSecondHeight = (firstSection.scrollHeight + secondSection.scrollHeight) - (firstSection.scrollHeight + secondSection.scrollHeight)*0.2;

const oneTwoThreeHeight = (firstSection.scrollHeight + secondSection.scrollHeight + thirdSection.scrollHeight) - (firstSection.scrollHeight + secondSection.scrollHeight + thirdSection.scrollHeight)*0.1;

left.addEventListener("click", () => {
  leftCheck();
  clearInterval(intervalSlider);

})

right.addEventListener("click", () => {
  rightCheck();
  clearInterval(intervalSlider);

})

document.addEventListener('keydown', logKey);

document.addEventListener('scroll', scrollAnimationThirdSection);
document.addEventListener('scroll', scrollAnimationFifthSection);
document.addEventListener('scroll', scrollFun);

function logKey(e) {
  e = e || window.event;
  if (e.keyCode == '37') {
    leftCheck();
  } else if (e.keyCode == '39') {
    rightCheck();
  }
  clearInterval(intervalSlider);
};

function scrollAnimationFifthSection(e){

}

function scrollAnimationThirdSection(e) {
  if(e.srcElement.scrollingElement.scrollTop > firstPlusSecondHeight){
    rightImage.classList.add("anim-active");
    leftImage.classList.add("anim-active");
    leftText.classList.add("anim-active");
    leftBg.classList.add("third-content-box-second-active");
    document.querySelector(".third-content-box-second").classList.add("third-content-box-second-active");
  }
}

function scrollAnimationFifthSection(e){
  if(e.srcElement.scrollingElement.scrollTop > oneTwoThreeHeight){
    document.querySelector(".five-left").classList.add("anim-active");
    document.querySelector(".five-adress").classList.add("anim-active");
    document.querySelector(".five-section-title").classList.add("anim-active");
  }
}

function scrollFun(e) {
  console.log(e.srcElement.scrollingElement.scrollTop);
  if(e.srcElement.scrollingElement.scrollTop > oneTwoThreeHeight){
    console.log("WTD");
  }
  // console.log(e.scrollTop);
  // console.log(thirdSection.scrollHeight);
};

intervalSlider;

// POP UP
const button = document.querySelector("button");
const popup = document.querySelector(".popup");
const layout = document.querySelector(".layout");


button.addEventListener('click', function(){
  popup.classList.add("popup-active");
  layout.classList.add("layout-active");
})

layout.addEventListener('click', () => {
  popup.classList.remove("popup-active");
  layout.classList.remove("layout-active");
})



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
