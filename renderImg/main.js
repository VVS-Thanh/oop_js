/*Task 1: 
Your task is to use DOM API to query the following DOM element
• div at line 13 (in HTML file) - save it to an variable called imageContainer
• Back button at line 18 (in HTML file) – save it to an variable called backBtn
• Next button at line 19 (in HTML file) – save it to an variable called nextBtn
Task 2:
Create a function called renderImage() that set the innerHTML of imageContainer to an HTML img
with src is the variable images at index 
Task 3: 
In body of function callback of backBtn you have to do the following:
• Decrease value of variable index by 1
• Check if that variable is less then 0 then set it to 0
• Call the function renderImage() from Task 2
In body of function callback of nextBtn you have to do the following:
• Increase value of variable index by 1
• Check if that variable is greater or equal the length of array images then set index to the 
length of images - 1
• Call the function renderImage() from Task 2*/

const imageContainer = document.querySelector(".img");
const backBtn = document.getElementById("backBtn");
const nextBtn = document.getElementById("nextBtn");
const slider = document.getElementById("slider");
var images = ["/img/img1.jpg", "/img/img2.png", "/img/img3.png"];
var index = 0;
function renderImage(index) {
  imageContainer.innerHTML = `<img id="slider" src="${images[index]}" alt="" />`;
}
function next() {
  index++;
  if (index >= images.length) {
    index = images.length - 1;
  }
  renderImage(index);
}

function prev() {
  index--;
  if (index < 0) {
    index = 0;
  }
  renderImage(index);
}
