import { db } from "./firebase.js";
import {
collection,
getDocs,
deleteDoc,
doc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Mobile Menu
const menu = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

if (menu && nav) {
menu.onclick = () => {
nav.style.display =
nav.style.display === "block" ? "none" : "block";
};
}

// Dark Mode
window.darkMode = function () {
document.body.classList.toggle("dark");
};

// Load Properties
window.loadProperties = async function () {

const propertyList = document.getElementById("property-list");

if (!propertyList) return;

propertyList.innerHTML = "";

const snapshot = await getDocs(collection(db, "properties"));

snapshot.forEach((item) => {

const data = item.data();

propertyList.innerHTML += `
<div class="card">

<img src="${data.image}" alt="Property">

<h3>${data.title}</h3>

<p>📍 ${data.location}</p>

<h4>PKR ${data.price}</h4>

<a href="property.html?id=${item.id}">
View Details
</a>

<button onclick="deleteProperty('${item.id}')">
🗑 Delete
</button>

</div>
`;

});

};

window.addEventListener("load", loadProperties);
// Search Properties
window.searchFirebaseProperties = async function () {

const searchInput = document.getElementById("searchInput");

if (!searchInput) return;

const search = searchInput.value.toLowerCase();

const propertyList = document.getElementById("property-list");

propertyList.innerHTML = "";

const snapshot = await getDocs(collection(db, "properties"));

snapshot.forEach((item) => {

const data = item.data();

if (
(data.title && data.title.toLowerCase().includes(search)) ||
(data.location && data.location.toLowerCase().includes(search))
) {

propertyList.innerHTML += `
<div class="card">

<img src="${data.image}" alt="Property">

<h3>${data.title}</h3>

<p>📍 ${data.location}</p>

<h4>PKR ${data.price}</h4>

<a href="property.html?id=${item.id}">
View Details
</a>

<button onclick="deleteProperty('${item.id}')">
🗑 Delete
</button>

</div>
`;

}

});

};

const searchBtn = document.getElementById("searchBtn");

if (searchBtn) {
searchBtn.addEventListener("click", searchFirebaseProperties);
}

// Delete Property
window.deleteProperty = async function (id) {

const ok =
// Property Details
window.loadProperty = async function () {

const title = document.getElementById("pTitle");

if (!title) return;

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

if (!id) return;

const snapshot = await getDocs(collection(db, "properties"));

snapshot.forEach((item) => {

if (item.id === id) {

const data = item.data();

document.getElementById("pTitle").innerText = data.title;
document.getElementById("pPrice").innerText = "PKR " + data.price;
document.getElementById("pCity").innerText = data.location;
document.getElementById("pDescription").innerText = data.description;

const img = document.getElementById("sliderImage");
if (img) img