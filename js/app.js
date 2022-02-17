// Common Error Handel Id
const stringError = document.getElementById('error');
const negativeNumberError = document.getElementById('negative-number-error');
const remainingBalanceError = document.getElementById('remaining-error');
const expensesBalanceError = document.getElementById('expenses-error');

// Income function
function income() {
    const incomeInput = document.getElementById('income').value;
    const parseIncome = parseFloat(incomeInput);
    return parseIncome;
}

// Balance function
function balanceCalculation(expensesCalculate, incomeValue) {
    const totalExpenses = document.getElementById('total-expenses');
    const totalBalance = document.getElementById('balance');
    const totalBalanceOutput = incomeValue - expensesCalculate;
    
    totalExpenses.innerText = expensesCalculate;
    totalBalance.innerText = totalBalanceOutput;
}

// Saving Amount function
function savingAmount() {
    const savingInput = document.getElementById('save-input');
    const savingAmountText = document.getElementById('saving-amount');
    const parseSavingInput = parseFloat(savingInput.value);
    const percentageValue = parseSavingInput / 100;
    const inputPercentage = percentageValue * income();
    savingAmountText.innerText = inputPercentage;
    return savingAmountText;
}

// Remaining Balance function
function remainingBalance() {
    const totalBalance = document.getElementById('balance').innerText;
    const remainingBalanceId = document.getElementById('remaining-balance');
    const parseTotalBalance = parseFloat(totalBalance);
    const parseSavingAmount = parseFloat(savingAmount().innerText);
    const remaining = parseTotalBalance - parseSavingAmount;
    remainingBalanceId.innerText = remaining;
}

// Event listener for calculate button 
document.getElementById('calculate-btn').addEventListener('click', function () {
    const incomeValue = income();
    const totalExpenses = document.getElementById('total-expenses');
    const totalBalance = document.getElementById('balance');

    // Expenses Input Value
    const foodInput = document.getElementById('food').value;
    const rentInput = document.getElementById('rent').value;
    const clothesInput = document.getElementById('clothes').value;
    const parseFood = parseInt(foodInput);
    const parseRent = parseInt(rentInput);
    const parseClothes = parseInt(clothesInput);
    const expensesSum = parseFood + parseRent + parseClothes;

    // validation check start
    if(incomeValue < expensesSum){
        totalBalance.innerText = '000';
        totalExpenses.innerText = '000';
        expensesBalanceError.style.display = 'block';
        negativeNumberError.style.display = 'none';
        stringError.style.display = 'none';
    }
    else if(foodInput < 0 || rentInput < 0 || clothesInput < 0){
        totalBalance.innerText = '000';
        totalExpenses.innerText = '000';
        negativeNumberError.style.display = 'block';
        stringError.style.display = 'none';
        expensesBalanceError.style.display = 'none';
    }
    else if(isNaN(expensesSum) || isNaN(incomeValue)){
        totalBalance.innerText = '000';
        totalExpenses.innerText = '000';
        stringError.style.display = 'block';
        negativeNumberError.style.display = 'none';
        expensesBalanceError.style.display = 'none';
    }
    else{
        balanceCalculation(expensesSum, incomeValue);
        negativeNumberError.style.display = 'none';
        stringError.style.display = 'none';
        expensesBalanceError.style.display = 'none';
    }  
});

// Event listener for save button 
document.getElementById('save-btn').addEventListener('click', function () {
    const totalBalance = document.getElementById('balance').innerText;
    const parseTotal = parseInt(totalBalance);

    const savingFunc = savingAmount();
    const parseSaving = parseInt(savingFunc.innerText);
    
    // validation check start here
    if(parseTotal < parseSaving){
        remainingBalanceError.style.display = 'block';
        document.getElementById('remaining-balance').innerText = '000';
        document.getElementById('saving-amount').innerText = '000';
    }
    else{
        savingAmount();
        remainingBalance();
        remainingBalanceError.style.display = 'none';
    }
});