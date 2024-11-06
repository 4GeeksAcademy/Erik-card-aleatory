/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let icon = ["♦", "♥", "♠", "♣"];
  let number = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "K",
    "Q",
    "J"
  ];

  let randomIcon = Math.floor(Math.random() * icon.length);
  let randomNumber = Math.floor(Math.random() * number.length);

  document.querySelector("#icon-top").innerHTML = icon[randomIcon];
  document.querySelector("#icon-bottom").innerHTML = icon[randomIcon];
  document.querySelector(".number").innerHTML = number[randomNumber];
};
