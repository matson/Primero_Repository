//Problem:
/*years divisible by 4 are leap years
but years divisible by 100 are not leap years
but years divisible by 400 are leap years*/

function isLeapYear(year) {
  if(year % 4 == 0 && year % 100 != 0){
    return true; //years divisible by 4 are leap years but not div. by 100
  }
  else if(year % 100 == 0 && year % 400 != 0){
    return false; //years divisible by 100 are not leap years and also not div. by 400
  }
  else if(year % 400 == 0){
    return true;
  }
  else{
    return false;
  }
  // TODO
}
