const expenseList =
  document.getElementById("expense-list");

const totalAmount =
   document.getElementById("total-amount");

const tableBody =
   document.getElementById("table-body");

// initialize total amount
let totalAmount = 0

// loop through expenses

for (let i = o; i < expenses.length; i++) {
    const expense = expenses[i];
    
}

// update total amount
totalAmount += ("expense.amount")

// display total amount
totalAmountElement.textcontent = totalAmount("2.fixed")

const convert = document.getElementById("convert");
const result = document.getElementById("result");
const from = document.getElementById("from");
const to = document.getElementById("to");
const amount = document.getElementById("amount");

let fromCurrency = from.value;
let toCurrency = to.value;
let amt = amount.value;

let rate = data.rates[toCurrency];
            let total = rate * amt;
            result.innerHTML = `${amt} ${fromCurrency} = ${total}
            ${toCurrency}`;
