function calculateVolumeAndArea(hightSide) {

    let volume = Math.pow(hightSide, 3); 
    let area = Math.pow(hightSide, 2)*6;
    if(!Number.isInteger(hightSide)||hightSide<=0){
        alert('При вычислении произошла ошибка');
        return;
    }
    return alert(`'Объем куба: ${volume}, площадь всей поверхности: ${area}'`);
}
calculateVolumeAndArea(10);