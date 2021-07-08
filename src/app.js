/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};
let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let adress = [".com", ".net", ".us", ".io"];
function myFun(n1, n2, n3, n4) {
  n1.forEach(element => {
    for (let element2 in n2) {
      for (let element3 in n3) {
        n4.forEach(el => {
          console.log(
            `${element}${element2}`.concat(noun[element3]).concat(el)
          );
        });
      }
    }
  });
}
myFun(pronoun, adj, noun, adress);
