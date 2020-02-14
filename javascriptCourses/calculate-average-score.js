/* John and Mike both play basketball in different teams.
In the latest 3 games,John's team scored 89,120 and 103 points,
while Mike's team scored 116,94 and 123 points.

1.Calculate the average score for each team.
2.Decide which teams wins in average (highest average score),
and print the winner to the console and also include the average
score in the output.
3.It might be a draw (the same average score)
*/

var JohnTeamScores = 89 + 120 + 103;
var MikeTeamScores = 16 + 94 + 123;

var JohnAverageTeamScore = JohnTeamScores /3;
var MikeAverageTeamScore = MikeTeamScores /3;

const getTheWinner = () =>{
    if (JohnAverageTeamScore > MikeAverageTeamScore ){
        return("John's team won with the average score of " + JohnAverageTeamScore)
    }
    else if(JohnAverageTeamScore < MikeAverageTeamScore){
        return("Mike's team won with the average score of " + MikeAverageTeamScore)
    }
    else{
        return ("its a draw")
    }
}
console.log(getTheWinner());