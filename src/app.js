/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function () {
  
  //Datos
  const words = {
    pronoun: ['the', 'our'],
    adj: ['great', 'big'],
    noun: ['jogger', 'racoon'],
    ext: ['.es', '.com', '.net']
  };

  //Borrado de "loading"
  document.getElementById("domain").innerHTML = '';

  //Loop para recorrer arrays
  words.pronoun.forEach(var1 => {
    words.adj.forEach(var2 => {
      words.noun.forEach(var3 => {
        words.ext.forEach(var4 => {
          document.getElementById("domain").innerHTML += '<li class="list-group-item col-4">'+var1+var2+var3+var4+'</li>';
        })
      })
    })
  })
};
