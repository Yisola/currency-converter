const amount = document.querySelector('input');
const calculateBtn = document.querySelector('.calculate-btn');
let display = document.getElementById('display');

let firstCurrency = "NAIRA", secondCurrency = "EUR", userInput = 0;

let currency1 = document.getElementById('currency-1');
currency1.addEventListener("click", () => {
    firstCurrency = currency1.value;
})

let currency2 = document.getElementById('currency-2');
currency2.addEventListener("click", () => {
    secondCurrency = currency2.value;
})

let xchangeRate = {
    NAIRA: 0,
    EUR: 0,
    USD: 0
}

calculateBtn.addEventListener('click', function (e) {
    e.preventDefault();
    if (amount.value !== "") {
        userInput = amount.value;
    }
    console.log(firstCurrency, secondCurrency, userInput);

    if (firstCurrency === "EUR") {
        xchangeRate.NAIRA = 504.71,
        xchangeRate.USD = 1.12,
        xchangeRate.EUR = 1
    } else if (firstCurrency === "USD") {
        xchangeRate.NAIRA = 412.50,
        xchangeRate.EUR = 0.82,
        xchangeRate.USD = 1
    } else if (firstCurrency === "NAIRA") {
        xchangeRate.EUR = 0.0020,
        xchangeRate.USD = 0.0024,
        xchangeRate.NAIRA = 1
    } else {
        xchangeRate.EUR = 0,
        xchangeRate.USD = 0,
        xchangeRate.NAIRA = 0
    }

    let totalAmount = xchangeRate[secondCurrency] * userInput;
    console.log(totalAmount);
    display.textContent = userInput + " " + firstCurrency + " = " + totalAmount + " " + secondCurrency;
})

