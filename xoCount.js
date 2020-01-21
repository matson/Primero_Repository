/*Challenge: Check to see if a string has the same amount of 'x's and 'o's. 
The method must return a boolean and be case insensitive. The string can contain any char.*/
/*Good practice in regards to characters and strings*/

var str = "random string"
//had provided example to test

function XO(str) {
    let result;
    var o = "o";
    var x = "x";
    var spliced = str.split("");
    for (var i = 0; i<spliced.length; i++){
        if(spliced[i] !== "o" && spliced[i] !=="x"){
            result = true;
        }
        
    }
    let O = 0;
    let X = 0;
    for(var i = 0; i<spliced.length; i++){
        if(spliced[i] === o || spliced[i] === o.toUpperCase()){
            O++;
        }
        if(spliced[i] === x || spliced[i] === x.toUpperCase()){
            X++;
        }
    }
    if(O === X){
        result = true;
    }
    if(O !== X){
        result = false;
    }
    return result;
}

XO(str);
