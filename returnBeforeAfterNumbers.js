function returnBeforeAfterNumbers(number,count){
    let arr = [];
    for(let i=0;i<count;i++){
        arr[i]=number-1;
        number++;
        if(i==count){
            break;
        }
    }
    
    return console.log(arr);
}
returnBeforeAfterNumbers(-10,5);