const dark = document.querySelector(".dark");
const light = document.querySelector(".light");
const body = document.querySelector("body");
const search = document.querySelector(".search");
const filter = document.querySelector(".filter");
const nav = document.querySelector("#navigation");
const header = document.querySelector("#header");


dark.addEventListener("click", press);
  light.addEventListener("click", darkPress);
let initial = false;

function press(){

  if (initial== false){
    console.log("hello");
    body.classList.add("body-dark");
    nav.classList.add("navigation-dark");
    search.classList.add("search-dark");
    filter.classList.add("filter-dark");
    light.classList.add("light-show")
    light.classList.remove("light-remove");
    dark.classList.add("dark-remove");
    dark.classList.remove("dark-show");

    initial = true;
  }else{
    darkPress();
  }

}

function darkPress(){

  if (initial== true){
    console.log("hello");
    body.classList.remove("body-dark");
    nav.classList.remove("navigation-dark");
    search.classList.remove("search-dark");
    filter.classList.remove("filter-dark");
    light.classList.remove("light-show")
    light.classList.add("light-remove");
    dark.classList.remove("dark-remove");
    dark.classList.add("dark-show");

    initial = false;
  }else{
    press();
  }

}
