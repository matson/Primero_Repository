/*Challenge: to find the sum of two arrays*/
/*Author: Matson Adams*/
/*Debugged with VS. and node application.*/
/*I know I could have used reduce() but did not want to simplify this time.*/



var arr1 = [1,1,1];
var arr2 = [2,2,2];

function arraySum(arr1, arr2)
{   
    var i;
    var sum1 = 0;
    for (i = 0; i < arr1.length; i++)
    {    
        //first sum of array  
         sum1 += arr1[i];
    }
    var j;
    var sum2 = 0;
    for (j = 0; j < arr2.length; j++)
    {   
        //second sum of  another array
        sum2 += arr2[j];
    }
    
    var total = sum1+sum2;
    //return total; //should be 9.
    console.log(total);
    
}

arraySum(arr1, arr2);
