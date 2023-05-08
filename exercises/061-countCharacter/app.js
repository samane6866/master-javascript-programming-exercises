function countCharacter(str, char) {
    // your code here
    return str.split("").filter((e)=> e===char).length
}