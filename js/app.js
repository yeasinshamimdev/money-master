// Income function
function income(){
    const incomeInput = document.getElementById('income');
    const parseIncome = parseFloat(incomeInput.value);
    return parseIncome;
}

// Expenses function
function expenses(){
    const foodInput = document.getElementById('food');
    const rentInput = document.getElementById('rent');
    const clothesInput = document.getElementById('clothes');
    const parseFood = parseFloat(foodInput.value);
    const parseRent = parseFloat(rentInput.value);
    const parseClothes = parseFloat(clothesInput.value);
    const sum = parseFood + parseRent + parseClothes;
    return sum;
}

// Balance function
function balance(){
    const totalExpenses = document.getElementById('total-expenses');
    const totalBalance = document.getElementById('balance');
    const totalExpensesOutput = expenses();
    const totalBalanceOutput = income() - totalExpensesOutput;
    totalExpenses.innerText = totalExpensesOutput;
    totalBalance.innerText = totalBalanceOutput;
}

// Remaining Balance function
function savingAmount(){
    const savingInput = document.getElementById('save-input');
    const savingAmountText = document.getElementById('saving-amount');
    const parseSavingInput = parseFloat(savingInput.value);
    const percentageValue = parseSavingInput / 100;
    const inputPercentage = percentageValue * income();
    savingAmountText.innerText = inputPercentage;
    return savingAmountText;
}

// Remaining Balance function
function remainingBalance(){
    const totalBalance = document.getElementById('balance').innerText;
    const remainingBalanceId = document.getElementById('remaining-balance');
    const parseTotalBalance = parseFloat(totalBalance);
    const parseSavingAmount = parseFloat(savingAmount().innerText);
    const remaining = parseTotalBalance - parseSavingAmount;
    remainingBalanceId.innerText = remaining;
}

// Event listener for calculate button 
document.getElementById('calculate-btn').addEventListener('click', function(){
    balance();
});

// Event listener for save button 
document.getElementById('save-btn').addEventListener('click', function(){
    savingAmount();
    remainingBalance();
});