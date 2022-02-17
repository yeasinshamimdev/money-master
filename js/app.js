// Error Handel 
const stringError = document.getElementById('error');
const negativeNumberError = document.getElementById('negative-number-error');
const showStringError = stringError.style.display = 'block';
const showNegativeError = negativeNumberError.style.display = 'block';

// Income function
function income() {
    const incomeInput = document.getElementById('income').value;
    const parseIncome = parseFloat(incomeInput);
    return parseIncome;
}

// Expenses function
function expensesCalculation() {
    const foodInput = document.getElementById('food').value;
    const rentInput = document.getElementById('rent').value;
    const clothesInput = document.getElementById('clothes').value;
    const parseFood = parseInt(foodInput);
    const parseRent = parseInt(rentInput);
    const parseClothes = parseInt(clothesInput);
    if (foodInput < 0 || rentInput < 0 || clothesInput < 0) {
        negativeNumberError.style.display = 'block';
        stringError.style.display = 'none';
    }
    else if (parseFood != 'number' || parseRent != 'number' || parseClothes != 'number') {
        stringError.style.display = 'block';
        negativeNumberError.style.display = 'none';
    }
    else {
        const expensesSum = parseFood + parseRent + parseClothes;
        return expensesSum;
    }
}

// Balance function
function balanceCalculation() {
    const totalExpenses = document.getElementById('total-expenses');
    const totalBalance = document.getElementById('balance');
    const totalExpensesOutput = expensesCalculation();
    const totalBalanceOutput = income() - totalExpensesOutput;
    totalExpenses.innerText = totalExpensesOutput;
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
    balanceCalculation();
});

// Event listener for save button 
document.getElementById('save-btn').addEventListener('click', function () {
    savingAmount();
    remainingBalance();
});