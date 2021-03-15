
var twentyPercentTip = 0.2;
var fiftyPercentTip = 0.15;
var tenPercentTip = 0.1;
var bills = [100, 40, 250, 20, 15, 500];

var billsArray = []
var tipsArray = []

for (var i of bills) {
    if (i < 50) tipsArray.push(i * twentyPercentTip)
    if (i >= 50 && i <= 200) tipsArray.push(i * fiftyPercentTip)
    if (i > 200) tipsArray.push(i * tenPercentTip)
}

for (var i in tipsArray) {
    arr = tipsArray[i] + bills[i]
    billsArray.push(arr)
}

console.log(`This are your tips:
${tipsArray}  `)

console.log(`And this are your full amounts paid:
${billsArray}`)