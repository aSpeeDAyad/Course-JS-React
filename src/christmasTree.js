const lines = 5;
let result = '',
    m = '',
    count = lines - 4 ;

for(let i=lines; i>=0; --i){
    if(count==1){
        result += '*';
    }
    for (let j = i; j > 0; j--) {
        m += ' ';
    }
    for (let k = 1; k < count; k++) {
        result += '*';
    }
    console.log(m + result);
    m = '';
    result = '*';
    count++;
    count++;  
}
