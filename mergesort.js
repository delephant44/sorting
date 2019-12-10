function split(wholeArray) {
  /* your code here to define the firstHalf and secondHalf arrays */
  let divide = Math.floor(wholeArray.length / 2);
  let firstHalf = wholeArray.slice(0, divide);
  let secondHalf = wholeArray.slice(divide, wholeArray.length);

  return [firstHalf, secondHalf];
}

function merge(array1, array2) {
  //sorting goes here
  let newArray = [];
  let i = 0;
  let j = 0;

  while (i < array1.length || j < array2.length) {
    if (array1[i] < array2[j]) {
      newArray.push(array1[i]);
      i++;
    } else {
      newArray.push(array2[j]);
      j++;
    }
}
// console.log(newArray);
return newArray;
}

function mergeSort(array) {
    if(array.length === 1) return array

    const splitted = split(array);
    const left = splitted[0]
    const right = splitted[1]
    // console.log("left >>>", left)
    // console.log("mergeSort(left) >>>", mergeSort(left))

    return merge(mergeSort(left), mergeSort(right));
}

console.log(mergeSort([8, 2, 1, 9, 5, 6, 3, 4]));
