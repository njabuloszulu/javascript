var balance = 1000;
var userInput = 12;
function userBalance(withDrawal){
    
    if (balance >= withDrawal){
        console.log(  "Your current balance is " + (balance - withDrawal))
    }
    else 
    {
     console.log("insuficiant funds")
    }
}

function withDraw(){
    balance - userInput
        return "Withdrawed amount " + (userInput);
    

};
console.log(withDraw(balance, userInput));
userBalance(userInput);
