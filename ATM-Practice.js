var balance = 0;
var transactionHistory = [];
const deposit = (addedAmount) => {
    balance = getCurrentBalance() + addedAmount;
    transactionHistory.push("Amount added " + addedAmount);
    return "Available balance " + getCurrentBalance();
};
const withdraw = (userAmount) =>{
    if(getCurrentBalance() >= userAmount){
        transactionHistory.push("withdrawal Amount " + userAmount);
        balance = getCurrentBalance() - userAmount;
        return "Your balance is " + balance;
    }
    else{
        return "insufficiant funds";
    }
}

const getCurrentBalance = () => {
    return balance;
}

const giveUserBalance = () => {
    return "Your balance is " + getCurrentBalance();
};

// console.log(deposit(100));
console.log(deposit(1000));
console.log(withdraw(200));
console.log(withdraw(200))
console.log(withdraw(200))
console.log(withdraw(200))
console.log(withdraw(200))
console.log(withdraw(200))
// console.log(deposit(100));
console.log(giveUserBalance());
console.log(transactionHistory);



