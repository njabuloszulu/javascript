var balance = 0;
var addedAmountHistory = [];
const deposit = (addedAmount) => {
    balance = getCurrentBalance() + addedAmount;
    addedAmountHistory.push("Amount added " + addedAmount);
    return "Available balance " + getCurrentBalance();
};

function getCurrentBalance() {
    return balance;
}

function giveUserBalance() {
    return "Your balance is " + getCurrentBalance();
};
console.log(deposit(100));
console.log(deposit(1000));
console.log(deposit(100));
console.log(giveUserBalance());
 console.log(addedAmountHistory);