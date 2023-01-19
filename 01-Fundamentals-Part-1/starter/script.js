
const calcAvg = (first,second,third) => (first+second+third)/3;
const scoreDolphines = calcAvg(44,23,71)
const scoreKolas=calcAvg(65,54,49)
// console.log(scoreKolas,scoreDolphines);

const checkWinner = function (scoreDolphines ,scoreKolas) {

    if(scoreDolphines>= 2*scoreKolas){

        console.log('Dolphines is Win 🏆🥇');
    }
else if(scoreKolas>= 2*scoreDolphines){

    console.log('Kolas is Win 🏆🥇');

}

else{

    console.log('No any teams wins 😒😒');
}

    
}

checkWinner(scoreDolphines,scoreKolas)