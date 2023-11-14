function getTimeFromMinutes(fullMinutes) {
    let days = parseInt(fullMinutes/1440);
    let hours;
    let minutes;
    let nameOfFullMinutes;
    let lastTwoNumbersOfFullMinutes = fullMinutes.toString().slice(fullMinutes.toString().length-2);
    let lastNumberOfFullMinutes = fullMinutes.toString().slice(fullMinutes.toString().length-1);

    if (fullMinutes <0) {
        console.log("Ошибка, проверьте данные");
        return;
    }
    if(lastTwoNumbersOfFullMinutes>=11&&lastTwoNumbersOfFullMinutes<=14){
        nameOfFullMinutes = 'минут';
    }
    else if (lastNumberOfFullMinutes == 1){
        nameOfFullMinutes = 'минута';
    }
    else if(lastNumberOfFullMinutes >=2 && lastNumberOfFullMinutes <= 4){
        nameOfFullMinutes = 'минуты';
    }
    else {
        nameOfFullMinutes = 'минут';
    }
    if (days<1){
        hours = parseInt(fullMinutes / 60);
        minutes = Math.round((fullMinutes / 60 - hours) * 60);
    } 
    if(days>=1){
        hours = parseInt((fullMinutes/1440 - days)*24);
        minutes =Math.round((fullMinutes/1440 - days)*1440);
        if(minutes>60){
            minutes = Math.round((minutes/60 - parseInt(minutes/60))*60);
        }          
    }
    let lastNumberOfDays = days.toString().slice(days.toString().length-1);
    let lastNumberOfHours = hours.toString().slice(hours.toString().length-1);
    let lastNumberOfMinutes = minutes.toString().slice(minutes.toString().length-1);
    let lastTwoNumbersOfDays = days.toString().slice(days.toString().length-2);
    let lastTwoNumbersOfHours = hours.toString().slice(hours.toString().length-2);
    let lastTwoNumbersOfMinutes = minutes.toString().slice(minutes.toString().length-2);
    let nameOfDay;
    let nameOfHours;
    let nameOfMinutes;
    if (lastTwoNumbersOfDays>=11&&lastTwoNumbersOfDays<=14){
        nameOfDay = 'дней';
    }
    else if(lastNumberOfDays == 1){
        nameOfDay = 'день';
    }else if (lastNumberOfDays >=2 && lastNumberOfDays<=4){
        nameOfDay = 'дня';
    }
    else{
        nameOfDay = 'дней';
    }
    if (lastTwoNumbersOfHours>=11&&lastTwoNumbersOfHours<=14){
        nameOfHours = 'часов';
    }
    else if(lastNumberOfHours == 1){
        nameOfHours = "час";
    }else if(lastNumberOfHours >=2&&lastNumberOfHours<=4){
        nameOfHours = 'часа';
    }
    else{
        nameOfHours = 'часов';
    }
    if(lastTwoNumbersOfMinutes>=11&&lastTwoNumbersOfMinutes<=14){
        nameOfMinutes = 'минут';
    }
    else if (lastNumberOfMinutes == 1){
        nameOfMinutes = 'минута';
    }
    else if(lastNumberOfMinutes >=2 && lastNumberOfMinutes <= 4){
        nameOfMinutes = 'минуты';
    }
    else {
        nameOfMinutes = 'минут';
    }
    return (console.log(`"${fullMinutes} ${nameOfFullMinutes} - это ${days} ${nameOfDay}, ${hours} ${nameOfHours} и ${minutes} ${nameOfMinutes}"`));
}
getTimeFromMinutes((1440+733)*8);
