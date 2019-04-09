var balance = 0;
var addedAmountHistory = [];
const deposite = (addedAmount) => {
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
console.log(deposite(100));
console.log(deposite(1000));
console.log(deposite(100));
console.log(giveUserBalance());
// console.log(balance);
 console.log(addedAmountHistory);



