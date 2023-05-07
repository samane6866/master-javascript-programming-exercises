function removeFromBackOfNew(arr) {
  // your code here
  let newArr=arr.filter((e, indice) =>indice !=arr.length-1)
  return newArr
}

