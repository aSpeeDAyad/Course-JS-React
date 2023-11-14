
const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 25,
    budget: 50000
};

function isBudgetEnough(data) {
    let masiveShops = data.shops;
    let sqrShops = 0;
    masiveShops.forEach((key)=>{
        let sqrShop = key.width*key.length;
        sqrShops += sqrShop;
    });
    let volumeShops = data.height*sqrShops;
    let countConsumptionOfShops = data.moneyPer1m3*volumeShops;
    if(data.budget>=countConsumptionOfShops){
        return(console.log('Бюджета Достаточно'));
    }else{
        return(console.log('Бюджета не Достаточно'));
    }
}
isBudgetEnough(shoppingMallData);