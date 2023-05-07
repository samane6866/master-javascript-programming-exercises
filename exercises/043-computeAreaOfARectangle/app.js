function computeAreaOfARectangle(length, width) {
  // your code here
  
    if (length <= 0 || width <= 0) {
      // Check for invalid inputs
      return "Length and width must be positive numbers.";
    }
    return length * width;
  
  

}

let output = computeAreaOfARectangle(10, 18);
console.log(output)