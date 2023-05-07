function computePerimeterOfARectangle(length, width) {
  // your code here
  if (length <= 0 || width <= 0) {
    // Comprobación de entradas inválidas
    return "La longitud y el ancho deben ser números positivos.";
  }
  return 2 * (length + width);
  
}
let output = computePerimeterOfARectangle(5, 2);
console.log(output);