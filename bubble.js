function bubble(){
  var length = array.length;
  for (var i=0; i<length; i++){
    for (var j=0; j<length-1-i; j++ ){ //这里的减i是对bubble排序的一个小优化，避免掉上一个循环周期中不必要的比较
      if (array[j] > array[j+1]){
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]] 
      }
    }
  }
};
