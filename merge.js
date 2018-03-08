/**
* 复杂度为O(nlogn)
*/
function mergeSort(arr) {
  return mergeSortRec(arr)
}


// 递归产生最小数组，并使用merge函数归并为排序好的大数组
var mergeSortRec = function(array){
  var length = array.length;
  if(length === 1) { // 递归调用停止条件
    return array; 
  }
  var mid = Math.floor(length / 2), 
  left = array.slice(0, mid), 
  right = array.slice(mid, length);
  return merge(mergeSortRec(left), mergeSortRec(right));
};


/**
* 负责合并和排序小数组来产生大数组，直到回到
* 原始数组并已排序完成。
*/
var merge = function(left, right){
  var result = [], // {7}
  il = 0,
  ir = 0;
  while(il < left.length && ir < right.length) { // {8}
    if(left[il] < right[ir]) {
      result.push(left[il++]); // {9}
    } else{
      result.push(right[ir++]); // {10}
    }
  }
  while (il < left.length){ // {11}
    result.push(left[il++]);
  }
  while (ir < right.length){ // {12}
    result.push(right[ir++]);
  }
  return result; // {13}
};
