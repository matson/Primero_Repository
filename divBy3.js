/*Challenge: Given a series of numbers as a string, determine if the number represented by the string is divisible by three.*/

 var str = "123456";
 //random numbers as a string.
 
function divisibleByThree(str){
  var seperated = str.split(""); //splits into an array of items  
  var size = seperated.length; //gets the size of this array
  var array = [size]; //make new int. array
  for(var i = 0; i<size; i++){ //loop through to convert to int.
      array[i] = parseInt(seperated[i]); //conversion takes place
  }

  let sum = 0; //total sum in the begin.
  
  for(var i = 0; i < array.length; i++){ //loop to go through all numbers in array
      sum += array[i]; //adding each of the numbers in array
  }
  if(sum % 3 == 0){ //if divisible by three
      return(true);
  }
  else{
      return(false); //all other cases no.
  }
  
  
  
}

divisibleByThree(str);
