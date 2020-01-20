var players = [
    { name: "Martial", goals: 13 },
    { name: "Jesus", goals: 12 }
]



calculateTotalGoals = (players) => {
    var totalGoals = 0
    for (var player of players) {
        totalGoals += player.goals
    }
    return totalGoals


}

console.log("total goals", calculateTotalGoals(players))