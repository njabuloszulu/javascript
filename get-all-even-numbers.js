var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

getEvenNumbers = (numbers) => {
    var arr = []
    for (i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 == 0) {
            arr.push(numbers[i])

        }

    }
    return arr
}

console.log("all even numbers", getEvenNumbers(numbers))