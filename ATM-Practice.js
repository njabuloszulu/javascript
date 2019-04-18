var balance = 0;
var pastActivities = [];
const deposit = (addedAmount) => {
    balance = getCurrentBalance() + addedAmount;
    pastActivities.push("Amount added " + addedAmount);
    return "Available balance " + getCurrentBalance();
};
const withdraw = (userAmount) => {
    if(getCurrentBalance() >= userAmount){
        pastActivities.push("withdrawal amount" + userAmount);
        return userAmount;
    }
    else{
        return "insufficient balance";
    };
};
const getCurrentBalance = () => {
    return balance;
}

const giveUserBalance = () =>{
    return "Your balance is " + getCurrentBalance();
};
console.log(deposit(100));
console.log(deposit(1000));
console.log(withdraw(500))
// console.log(deposit(100));
// console.log(giveUserBalance());
console.log(balance);
console.log(pastActivities);



