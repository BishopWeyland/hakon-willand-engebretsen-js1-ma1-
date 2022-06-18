const cats = [
  {
    name: "Blob",
    age: 10,
  },
  {
    name: "Harold",
  },
  {
    name: "Blurt",
    age: 21,
  },
];

// Question 1

const cat = complain;

function complain() {
  console.log("Meow!");
}

cat();

// Question 2

const heading = document.querySelector("h3");

heading.innerHTML = "Updated heading";

// Question 3

heading.style.fontSize = "2em";

// Question 4

heading.className = "subheading";

// Question 5

const paragraphs = document.querySelectorAll("p");

for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.color = "red";
}

// Question 6

const resultContainer = document.querySelector(".results");

resultContainer.innerHTML = `<p>New paragraph</p>`;
resultContainer.style.backgroundColor = "yellow";

// Question 7

function catList(list) {
  for (let i = 0; i < list.length; i++) {
    console.log(list[i].name);
  }
}

catList(cats);

// Question 8

let html = "";

function createCats(cats) {
  for (let i = 0; i < cats.length; i++) {
    let catAge = "Age unknown";

    if (cats[i].age) {
      catAge = cats[i].age;
    }

    html += `<div>
    <h5>${cats[i].name}</h5>
    <p>${catAge}</p>
    </div>`;
  }
  return html;
}

createCats(cats);

const catContainer = document.querySelector(".cat-container");

catContainer.innerHTML = html;
