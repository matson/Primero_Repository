//Code a function which reverses the order of words in a "string" sentence

function reverseWords(str){
var changed = str.split(" "); //split into an array to re-order
var reversed = changed.reverse(); //reverse the order
var final = reversed.join(" "); //join all letters back/no commas
  return final; // reverse those words //final output
}

//author: Matson Adams
