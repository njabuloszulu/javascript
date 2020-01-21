const students = [
    { name: "Billy", gender: "Male" },
    { name: "Fiona", gender: "Female" },
    { name: "Gordon", gender: "Male" }
]

searchGender = (students) => {

    var males = 0
    var females = 0

    for (var i in students) {
        if (students[i].gender === "Male") {
            males++
        } else {
            females++
        }
    }

    return `total number of males ${males}, total number of females ${females}`
}

console.log( searchGender(students))