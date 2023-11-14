
const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
let allCurrencies = [...baseCurrencies, ...additionalCurrencies];

function availableCurr(arr, missingCurr) {
    let str = `Available Currency: \n`;

    function counting() {
        let newArr = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == missingCurr || missingCurr == '') {
                for (let j = i; j < arr.length; j++) {
                    newArr[j] = arr[j + 1];
                    if (j == arr.length - 1) {
                        str += '';
                    } else {
                        str += `${newArr[j]} \n`;
                    }
                }
                newArr.pop();
                return console.log(str);
            }
            newArr[i] = arr[i];
            str += `${newArr[i]} \n`;
        }
    }
    if (arr.length === 0) {
        return console.log('Don`t have avaible currency');
    }
     else if (missingCurr) {
        counting();
    }
     else {
        let newArr = [];
        for (let i = 0; i < arr.length; i++) {
            newArr[i] = arr[i];
            str += `${newArr[i]} \n`;
        }
        return(console.log(str));
    }
}
availableCurr(allCurrencies,EUR);





