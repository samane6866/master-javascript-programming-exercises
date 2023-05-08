function removeFromFrontOfNew(arr) {
    // your code here
    let newArr=arr.filter((array, index)=> index!=0)
    return newArr
}