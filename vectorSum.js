/*Challenge: to determine whether the sum of all numbers in a "vector" are even or odd.*/
/*Need to consider absolute value*/

var array = [1,-2];

function oddOrEven(array) {

    var i;
    var sum = 0;
    for(i = 0; i<array.length; i++)
    {
        sum += Math.abs(array[i]);
    }
    if (sum % 2 == 0)//if it's even
    {
        console.log("even");
        //return even
    }
    else{
        
        console.log("odd");
        //return odd
    }
    
     
}
  
oddOrEven(array);
