const memo = ["A", "B", "C"]
const answers = ["A", "B", "C"]

calculateMarks = (answers, memo) => {
    var totalMarks = 0

    for (var i in answers) {
        if (answers[i] === memo[i]) {
            totalMarks += 1
        }
    }
    return totalMarks
}



console.log("total marks", calculateMarks(answers, memo))