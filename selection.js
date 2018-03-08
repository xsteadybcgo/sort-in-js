function selectionSort(array) {
    var length = array.length, 
        indexMin;
    for (var i = 0; i < length - 1; i++) { 
        indexMin = i; // define the index of the minimum element
        for (var j = i; j < length; j++) {
            if (array[indexMin] > array[j]) { 
                indexMin = j; 
            }
        }
        if (i !== indexMin) { 
            [array[i], array[indexMin]] = [array[indexMin], array[i]];
        }
    }
    return array;
};
