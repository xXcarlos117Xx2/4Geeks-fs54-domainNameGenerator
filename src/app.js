/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const words = {
    pronoun: ["the", "our"],
    adj: ["great", "big"],
    noun: ["jogger", "racoon"]
  };
  let result = "";
  for (let i = 0; i < Object.keys(words).length; i++) {
    result +=
      words[Object.keys(words)[i]][
        Math.floor(Math.random() * words[Object.keys(words)[i]].length)
      ];
    // if (i < Object.keys(words).length - 1) {
    //   result += " ";
    // }
  }

  document.getElementById("domain").innerHTML = result;
};
