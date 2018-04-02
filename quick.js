function quick(arr) {
  // 递归调用条件
  if(arr.length<=1) {
    return arr
  }
  var pivotIndex = Math.floor(arr.length/2),
      pivot = arr.splice(pivotIndex,1)[0],  // 挑出来作为中间值
      left = [],
      right = [];
  for(var i=0; i<arr.length; i++) {
    if(pivot>arr[i]) {
      left.push(arr[i]);
    }else {
      right.push(arr[i]);
    }
  }
  return quick(left).concat([pivot], quick(right))
}
