function selectionSort(array) {
    var length = array.length, //{1}
        indexMin;
    for (var i = 0; i < length - 1; i++) { //{2}
        indexMin = i; //{3}
        for (var j = i; j < length; j++) { //{4}
            if (array[indexMin] > array[j]) { //{5}
                indexMin = j; //{6}
            }
        }
        if (i !== indexMin) { //{7}
            [array[i], array[indexMin]] = [array[indexMin], array[i]];
        }
    }
    return array;
};
