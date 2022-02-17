document.getElementById('calculate-btn').addEventListener('click', function () {
    const incomeInput = document.getElementById('income');
    const parseIncome = parseFloat(incomeInput.value);

    const foodInput = document.getElementById('food');
    const rentInput = document.getElementById('rent');
    const clothesInput = document.getElementById('clothes');
    const parseFood = parseFloat(foodInput.value);
    const parseRent = parseFloat(rentInput.value);
    const parseClothes = parseFloat(clothesInput.value);
    const expensesSum = parseFood + parseRent + parseClothes;

    const balance = parseIncome - expensesSum;

    const totalExpenses = document.getElementById('total-expenses');
    const totalBalance = document.getElementById('balance');
    totalExpenses.innerText = expensesSum;
    totalBalance.innerText = balance;
});

// Event listener for save button 
document.getElementById('save-btn').addEventListener('click', function () {
    
});