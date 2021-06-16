let rating = 0;
let rate;
const star_no_1 = document.querySelector("#star1");
const star_no_2 = document.querySelector("#star2");
const star_no_3 = document.querySelector("#star3");
const star_no_4 = document.querySelector("#star4");
const star_no_5 = document.querySelector("#star5");
const clicked = "style.color='orange'";

function star1() {
  rating = 1;
  localStorage.setItem("rate", "star1");
  star_no_1.style.color = "orange";
  star_no_2.style.color = "gray";
  star_no_3.style.color = "gray";
  star_no_4.style.color = "gray";
  star_no_5.style.color = "gray";
}
function star2() {
  rating = 2;
  localStorage.setItem("rate", "star2");
  star_no_1.style.color = "orange";
  star_no_2.style.color = "orange";
  star_no_3.style.color = "gray";
  star_no_4.style.color = "gray";
  star_no_5.style.color = "gray";
}
function star3() {
  rating = 3;
  localStorage.setItem("rate", "star3");
  star_no_1.style.color = "orange";
  star_no_2.style.color = "orange";
  star_no_3.style.color = "orange";
  star_no_4.style.color = "gray";
  star_no_5.style.color = "gray";
}
function star4() {
  rating = 4;
  localStorage.setItem("rate", "star4");
  star_no_1.style.color = "orange";
  star_no_2.style.color = "orange";
  star_no_3.style.color = "orange";
  star_no_4.style.color = "orange";
  star_no_5.style.color = "gray";
}
function star5() {
  rating = 5;
  localStorage.setItem("rate", "star5");
  star_no_1.style.color = "orange";
  star_no_2.style.color = "orange";
  star_no_3.style.color = "orange";
  star_no_4.style.color = "orange";
  star_no_5.style.color = "orange";
}

// Check browser support
if (typeof Storage !== "undefined") {
  const lastRate = localStorage.getItem("rate");
  if (lastRate === "star1") {
    star1();
    console.log("Rated Stars :- 1")
  } else if (lastRate === "star2") {
    star2();
    console.log("Rated Stars :- 2")
  } else if (lastRate === "star3") {
    star3();
    console.log("Rated Stars :- 3")
  } else if (lastRate === "star4") {
    star4();
    console.log("Rated Stars :- 4")
  } else if (lastRate === "star5") {
    star5();
    console.log("Rated Stars :- 5")
  }
} else {
  console.log("not supported !");
}
