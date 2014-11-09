function countVowels(x){
  var count = 0;

  for(var i = 0; i < x.length; i++){
    if("aeiouAEIOU".indexOf(x[i]) >= 0){
      count ++;
    }
  }
  if(count/(x.length) > 0.3){
    return true;
  } else {
    return false;
  }

}

/*function mommify(inputStr){
  if( countVowels(inputStr) ){
  var result = "";
  var chars = inputStr.split("");
  for(var i = 0; i <chars.length; i++){
    if("aeiouAEIOU".indexOf(chars[i]) >= 0){
      result += "mommy";

    }else{
      result += chars[i]
    }


  }
 return result ;
 } else {
   return inputStr;
 }
}*/

/*function mommify(inputStr){
  if( countVowels(inputStr) ){
  var result = "";
  var chars = inputStr.split("");
  for(var i = 0; i <chars.length; i++){
    if("aeiouAEIOU".indexOf(chars[i]) >= 0){
      if("aeiouAEIOU".indexOf(chars[i-1]) >= 0){
        break;
      }

      result += "mommy";

    }else{
      result += chars[i]
    }


  }
 return result ;
 } else {
   return inputStr;
 }
}*/

function mommify(inputStr){
  if( countVowels(inputStr) ){
  var result = "";
  var chars = inputStr.split("");
  for(var i = 0; i <chars.length; ){
    if("aeiouAEIOU".indexOf(chars[i]) >= 0){
      for ( i; "aeiouAEIOU".indexOf(chars[i]) != -1; i++){

      }
      result += "mommy"

    }else{
      result += chars[i];
      i++;
    }


  }
 return result ;
 } else {
   return inputStr;
 }
}
