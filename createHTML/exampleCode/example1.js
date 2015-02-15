var recursiveReverse = function (str){
  if( str.length === 1 ){
    return str;
  }
  var result = str.slice(-1);
  result += recursiveReverse(str.slice(0,-1));
  return result;

}