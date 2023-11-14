function showeNumbers(a,b){
    let chain = a;
    let chains =``;
    let str = '---';
    if (b<=0||typeof(b)==='string'){
            b=1;
        }
    for(let i=1;i<=b;i++){
        if(i==b){
            str ="";
        }       
        chains += i*chain + str;
    }   
    return console.log(chains); 
}
showeNumbers(2,2);