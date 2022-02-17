document.getElementById('calculate-btn').addEventListener('click', function () {
    const incomeInput = document.getElementById('income').value;
    const parseIncome = parseFloat(incomeInput);

    const foodInput = document.getElementById('food').value;
    const rentInput = document.getElementById('rent').value;
    const clothesInput = document.getElementById('clothes').value;
    const parseFood = parseInt(foodInput);
    const parseRent = parseInt(rentInput);
    const parseClothes = parseInt(clothesInput);
    const expensesSum = parseFood + parseRent + parseClothes;

    const balance = parseIncome - expensesSum;

    const totalExpenses = document.getElementById('total-expenses');
    const totalBalance = document.getElementById('balance'); 
});

// Event listener for save button 
document.getElementById('save-btn').addEventListener('click', function () {
    
});