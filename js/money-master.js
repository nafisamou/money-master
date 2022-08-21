// step -1:
document.getElementById('calculate').addEventListener('click',function(){
const income = getInputFieldValueById('income');
const food = getInputFieldValueById('food');
const rent = getInputFieldValueById('rent');
const clothes = getInputFieldValueById('clothes');

// validation:
if(isNaN(income) || isNaN(food) || isNaN(rent) || isNaN(clothes) || income < 0 || food < 0 || rent < 0 || clothes < 0 || Math.sign (income) === -1 ||
Math.sign (food) === -1 ||
Math.sign (rent) === -1 ||
Math.sign (clothes) === -1 ) {
alert ('please enter the valid input');
return;
}
// step-2:
const totalExpense = food + rent + clothes;
setTextElementValueById('expense',totalExpense);
const totalBalance = income - totalExpense;
setTextElementValueById('balance',totalBalance);

})

// step-3:
document.getElementById('btn-save').addEventListener('click',function(){
const saveInput = getInputFieldValueById('save-input');
const totalBalance = getTextElementValueById('balance');
// validation:
if(isNaN(saveInput) || isNaN(totalBalance) || saveInput < 0 || totalBalance < 0 || saveInput > 100 || Math.sign(saveInput === -1) || Math.sign(totalBalance === -1)){
alert('Its wrong, please enter the valid number');
return;
}

// step-4:
const savingAmount = (saveInput * totalBalance) / 100;
setTextElementValueById('saving-amount',savingAmount);
const remainingAmount = (totalBalance - savingAmount);
setTextElementValueById('remaining-amount',remainingAmount)
})
