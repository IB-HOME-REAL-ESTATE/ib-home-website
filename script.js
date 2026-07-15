// Mobile Menu

let menu = document.querySelector(".menu-btn");
let nav = document.querySelector("nav");

if(menu){

menu.onclick = function(){

if(nav.style.display === "block"){
    nav.style.display = "none";
}
else{
    nav.style.display = "block";
}

}

}



// Admin Login

function login(){

let user = document.getElementById("username").value;

let pass = document.getElementById("password").value;


if(user=="admin" && pass=="12345"){

alert("Login Successful");

window.location="admin.html";

}

else{

alert("Wrong Username or Password");

}

}




// Add Multiple Properties




function addProperty(){

let properties = JSON.parse(localStorage.getItem("properties")) || [];

let title = document.querySelector('input[placeholder="Property Title"]').value;
let city = document.querySelector('input[placeholder="City / Location"]').value;
let price = document.querySelector('input[placeholder="Price"]').value;
let description = document.querySelector('input[placeholder="Description"]').value;
let phone = document.querySelector('input[placeholder="Phone Number"]').value;

let imageInput = document.getElementById("propertyImage");

let image = "";

if(imageInput.files.length > 0){

let reader = new FileReader();

reader.onload = function(e){

image = e.target.result;

saveProperty(image);

}

reader.readAsDataURL(imageInput.files[0]);

}
else{

saveProperty("");

}


function saveProperty(image){

let newProperty = {

title:title,
city:city,
price:price,
description:description,
phone:phone,
image:image

};

properties.push(newProperty);

localStorage.setItem("properties", JSON.stringify(properties));

alert("Property Added Successfully");

}

}




// Show Properties on Home Page

window.onload = function(){

let box = document.getElementById("new-property");

let properties = JSON.parse(localStorage.getItem("properties")) || [];


if(box){

box.innerHTML="";


properties.forEach(function(item){

box.innerHTML += `

<div class="card">
<img src="${item.image}" style="width:100%;height:200px;object-fit:cover;">
<h3>${item.title}</h3>

<p>📍 ${item.city}</p>

<h4>PKR ${item.price}</h4>

<p>${item.description || ""}</p>

<p>📞 ${item.phone || ""}</p>

<a href="property.html">View Details</a>

</div>

`;

});


}

};




// Search Property

function searchProperty(){

let city = document.querySelector('.search-box input').value.toLowerCase();


let cards = document.querySelectorAll('.card');


cards.forEach(function(card){


let text = card.innerText.toLowerCase();


if(text.includes(city)){

card.style.display="block";

}

else{

card.style.display="none";

}


});


}function loadProperty(){

let properties = JSON.parse(localStorage.getItem("properties")) || [];

let item = properties[properties.length-1];


if(item){

document.getElementById("pTitle").innerHTML=item.title;

document.getElementById("pCity").innerHTML="📍 "+item.city;

document.getElementById("pPrice").innerHTML="💰 PKR "+item.price;

document.getElementById("pDescription").innerHTML=item.description;

document.getElementById("pPhone").innerHTML="📞 "+item.phone;

}

}


if(document.getElementById("pTitle")){

loadProperty();

}document.addEventListener("click", function(e){

if(e.target.classList.contains("favorite")){

if(e.target.innerHTML=="❤️"){
e.target.innerHTML="💖";
}
else{
e.target.innerHTML="❤️";
}

}

});let images = [
"https://via.placeholder.com/700x400?text=Image+1",
"https://via.placeholder.com/700x400?text=Image+2",
"https://via.placeholder.com/700x400?text=Image+3"
];

let current = 0;

function showImage(){
let img = document.getElementById("sliderImage");
if(img){
img.src = images[current];
}
}

function nextImage(){
current = (current + 1) % images.length;
showImage();
}

function prevImage(){
current = (current - 1 + images.length) % images.length;
showImage();
}

window.addEventListener("load", showImage);
function darkMode(){
    document.body.classList.toggle("dark");
}function signup(){

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let password = document.getElementById("password").value;

localStorage.setItem("userName", name);
localStorage.setItem("userEmail", email);
localStorage.setItem("userPassword", password);

alert("Account Created Successfully");

window.location = "login.html";

}function rate(stars){

document.getElementById("ratingResult").innerHTML =
"You rated this property " + stars + " ⭐";

}function shareWhatsApp(){

let text = "Check out this property on IB Home Real Estate";

let url = "https://wa.me/?text=" + encodeURIComponent(text);

window.open(url, "_blank");

}function deleteProperties(){

if(confirm("Are you sure you want to delete all properties?")){

localStorage.removeItem("properties");

alert("All Properties Deleted");

location.reload();

}

}