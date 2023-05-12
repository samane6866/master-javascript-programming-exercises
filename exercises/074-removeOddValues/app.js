function removeOddValues(obj) {
    // your code here

    for(let key in obj){
        if(obj[key]%2===1){
            delete obj[key];
        }
    }

}