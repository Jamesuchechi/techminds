
const billAmount = 50.00;
const tipPercentage = 15;

const tipAmount = billAmount * (tipPercentage / 100);
const totalBill = billAmount + tipAmount;

console.log(`Tip Amount: $${tipAmount}`);
console.log(`Total Bill: $${totalBill}`);
