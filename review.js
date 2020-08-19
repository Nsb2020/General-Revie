var reviews = [ {
id: 1,
author: "Lucky Dayo",
job: "Banker",
text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua Ut enim ad minim venia",
img:  "customer-1.jpg",
},
{
id: 2,
author: "Firdaus Ayo",
job: "Lecturer",
text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia",
img: "customer-2.jpg"},
{
 id: 3,
author: "ben mark",
job: "Website developer",
text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia",
img:  "customer-3.jpg",
}];
var img = document.getElementById("person-img");
var author = document.getElementById("author");
var job = document.getElementById("job");
var info = document.getElementById("info");
var prevBtn = document.querySelector(".prev-btn");
var nextBtn = document.querySelector(".next-btn"); 
var randomBtn = document.querySelector(".random-btn");
// set starting item.
let currentItem = 0;
//load initial item
window.addEventListener("DOMContentLoaded", function (){ 
showPerson(currentItem)});

function showPerson(person){
var item = reviews[person];
img.src=item.img;
author.textContent = item.author;
job.textContent = item.job;
info.textContent = item.text;
console.log(item)
};
nextBtn.addEventListener("click", function(){
currentItem++;
if (currentItem > reviews.length - 1){
	currentItem = 0;
}
	showPerson(currentItem);
	color="red"

});
prevBtn.addEventListener("click", function(){
currentItem--;
if (currentItem < 0){
	currentItem = reviews.length - 1;
}
showPerson(currentItem);
});
randomBtn.addEventListener("click", function(){
	currentItem = Math.floor(Math.random() * reviews.length);
	showPerson(currentItem)
	console.log(currentItem)
});

































 

























