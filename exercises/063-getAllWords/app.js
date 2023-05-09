function getAllWords(str) {
    // your code here
    if (str.length === " ") {
        return [];
      }
      
      
      return str.split(/\W+/);
    
}
