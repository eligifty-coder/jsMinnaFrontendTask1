const sideBar = document.querySelector(".sideBar")
const closeBtn = document.querySelector(".closeBtn")
const navBtn = document.querySelector("#navBtn")
const nav = document.querySelector("#nav")
let myDetail = ["self-taught developer","i write JavaScript", "i have started learning React"]
let writingCenter = document.querySelector('.letter')
let myInterval;
// navBtn to display sideBar
const showSidebarFun= ()=>{
   sideBar.classList.add('showSidebar')
}
// closeBtn to close sideBar
const closeSidebarFun = ()=>{
   sideBar.classList.remove('showSidebar')
}
const navBarFixFun= ()=>{
   if(pageYOffset>105){
      nav.classList.add('navbarFixed')
   }else{
      nav.classList.remove('navbarFixed')
   }
}
navBtn.addEventListener('click',showSidebarFun)
closeBtn.addEventListener('click',closeSidebarFun)
window.addEventListener('scroll', navBarFixFun)

// typewriting function
let cursor = document.querySelector('.cursor');
let count = 0
let singleCount = 0
let myLetter
let letter=""
let delLetter=""
const deleteWritingFun = ()=>{
   delLetter= letter.substr(0, --singleCount)
   writingCenter.innerHTML = delLetter;
   if(delLetter==""){
      clearInterval(myInterval)
      if(count===myDetail.length-1){
         count=0
         myInterval = setInterval(typeWritingFun, 1000);
      }else{
         count++
         cursor.getElementsByClassName.animation = 'blink 1s  infinite';
         myInterval = setInterval(typeWritingFun, 1000);
      }
   }
}
const typeWritingFun=()=>{
   myLetter = myDetail[count]
   letter=myLetter.substr(0,singleCount++)
   writingCenter.innerHTML=letter
   if(myLetter==letter){
      clearInterval(myInterval)
      cursor.getElementsByClassName.animation="none"
      myInterval= setInterval(deleteWritingFun,500)
   }
}
myInterval = setInterval(typeWritingFun, 1000)