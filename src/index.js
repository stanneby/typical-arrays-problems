
exports.min = function min (array) {
  if(array === undefined){
    return 0;
  }
  let len = array.length;
  if(len == 0){
    return 0;
  }
  let min =  array[0];
  for(let i = 1; i < len; i++){
    if(array[i] < min){
      min = array[i];
    }
  }
  return min;
}

exports.max = function max (array) {
  if(array === undefined){
    return 0;
  }
  let len = array.length;
  if(len == 0){
    return 0;
  }
  let max =  array[0];
  for(let i = 1; i < len; i++){
    if(array[i] > max){
      max = array[i];
    }
  }
  return max;
}

exports.avg = function avg (array) {
  if(array === undefined){
    return 0;
  }
  let len = array.length;
  if(len == 0){
    return 0;
  }  
  let avg = 0;
  for(let i = 0; i < len; i++){
    avg = avg + array[i];
  }
  return avg/len;
}
