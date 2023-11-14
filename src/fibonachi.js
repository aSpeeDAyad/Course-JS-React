function fibonachi(n) {
    let str = '';
    let a = 0;
    let b = 1;
    let c;  
    
    if (typeof(n) !== 'number' || n <= 0 || !Number.isInteger(n)) {
        return console.log('"'+'"');
    }
    if(n>1){
        str = "0 1";
    }
    if(n==1){
        c=0;
        str =`${c}`; 
       }
    for (let i=0; i<=n-3; i++){
       c= a + b;
       str +=` ${c}`;
       str = str.toString();
       a=b;
       b=c;
    }
    return console.log('"'+ str + '"');
}
fibonachi(-999);

