
const students = ['Peter', 'Andrew', 'Mark', 'Josh', 'Sandra','Sandra', 'Cris','Cris', 'Bernard', 'Takesi'];

function sortStudentsByGroups(arr) {
    let sortedListOfStudents = students.sort();

    let arr1 = [];
    let arr2 = [];
    let arr3 = [];
    let restArr = [];
    for (let i = 0; i < sortedListOfStudents.length; i++) {
        
        if (i < 3) {
            arr1[i] = arr[i];
        } 
        else if (i < 6) {
            arr2.push(arr[i]);
        }
         else if (i < 9) {
            arr3.push(arr[i]);
        }
         else {
            restArr.push(arr[i]);
        }
}
let listOfStudents = [[...arr1],[...arr2],[...arr3], `Remained Students: ${restArr.length ===0? '-': restArr.join(', ')}`];
return (console.log(listOfStudents));
}
sortStudentsByGroups(students);