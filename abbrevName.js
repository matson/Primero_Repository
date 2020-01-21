/*Challenge: Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
The output should be two capital letters with a dot separating them.*/

var name = "Jason Hitch";

function abbrevName(name){
  const nameArray = name.split(" ");
    //set the first name and last name both to consts.
    const firstName = nameArray[0];
    const lastName = nameArray[1];

    //split first name and last name
    const charArray1 = firstName.split('');
    const charArray2 = lastName.split('');
    
    //Now get each of the letters of initials
    const firstLetter = charArray1[0].toUpperCase();
    const secondLetter = charArray2[0].toUpperCase();
    
    
    const final = firstLetter + "." + secondLetter;
   
    return final;
        

}

abbrevName(name);
