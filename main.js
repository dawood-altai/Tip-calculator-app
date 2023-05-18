const billInput = document.querySelector("#bill");
const tipBtns = document.querySelectorAll(".tip-btns button");
const customTipInput = document.querySelector("#custom");
const peopleInput = document.querySelector("#people");
const tipAmountOutput = document.querySelector("#tipAmount");
const totalOutput = document.querySelector("#total");
const resetBtn = document.querySelector("#resetBtn");

let billAmount = 0;
let tipPercentage = 0;
let customTipPercentage = 0;
let numberOfPeople = 1;

// Function to update the tip and total amounts
function updateAmounts() {
  let tipAmount = (billAmount * tipPercentage) / numberOfPeople;
  let totalAmount = (billAmount * (1 + tipPercentage)) / numberOfPeople;

  tipAmountOutput.innerHTML = "$" + tipAmount.toFixed(2);
  totalOutput.innerHTML = "$" + totalAmount.toFixed(2);
}

// Function to reset the calculator
function resetCalculator() {
  billAmount = 0;
  tipPercentage = 0;
  customTipPercentage = 0;
  numberOfPeople = 1;
  billInput.value = "";
  customTipInput.value = "";
  peopleInput.value = "";
  tipAmountOutput.innerHTML = "$0.00";
  totalOutput.innerHTML = "$0.00";
}

// Event listeners
billInput.addEventListener("input", (event) => {
  billAmount = parseFloat(event.target.value) || 0;
  updateAmounts();
});

tipBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    tipPercentage = parseFloat(btn.innerHTML) / 100;
    customTipInput.value = "";
    updateAmounts();
  });
});

customTipInput.addEventListener("input", (event) => {
  customTipPercentage = parseFloat(event.target.value) / 100 || 0;
  tipPercentage = customTipPercentage;
  updateAmounts();
});

peopleInput.addEventListener("input", (event) => {
  numberOfPeople = parseInt(event.target.value) || 1;
  updateAmounts();
});

resetBtn.addEventListener("click", resetCalculator);
