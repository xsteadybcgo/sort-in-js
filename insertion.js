function insertionSort(arr) {
  var len = arr.length,
      j, temp; // 临时变量用于储存需要插入排序的元素的下标和值
  for(let i=1; i<len; i++) {
    j = i;
    temp = arr[i]
    
    // 将临时变量和所有前面的值进行比较，如果前面的数大于j位置的temp，则吧j的值修改为前面该位置的值，
    // 同时j--，比较完毕后，将最后j确定的位置的值修改为temp
    while(j > 0 && temp < arr[j-1]) { 
      arr[j] = arr[j-1];
      j--;
    }
    arr[j] = temp
  }
}
