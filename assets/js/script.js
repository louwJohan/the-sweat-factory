let advanced = [["THE GOOD THE BAD AND THE UGLY","For Time", "200 Double-Unders", "1,500/1,250 meter Row", "30 Shoulder-to-Overheads (155/105 lb)",
    "100 Double-Unders", "1,000/800 meter Row", "20 Shoulder-to-Overheads (155/105 lb)", "50 Double-Unders", "500/400 meter Row",
    "10 Shoulder-to-Overheads (155/105 lb)", "With a running clock, complete the prescribed work in the order written as fast as possible (“For Time“)."], ["HAMMERHEAD SHARK", "5 Rounds for Time",
    "21 Toes-to-Rings", "7 Power Cleans (185/125 lb)", "With a running clock, complete 5 rounds of the prescribed work in the order written as fast as possible (“For Time“)."],
    ["ONE ZONE HOME WOD 44", "3 Rounds for Time", "400 meter Run", "21 V-Ups", "15 Hand Release Push-Ups", "Time Cap: 15 minutes",
    "With a running clock, complete 3 rounds of the prescribed work in the order written as fast as possible (“For Time“)."], ["211221-MAYHEM", "For Time",
    "1 Burpee", "2 Strict Pull-Ups", "3 Knees-to-Elbows", "4 Strict Handstand Push-Ups", "5 Box Jump Overs (24/20 in)", "6 Pistols", "7 Kipping Toes-to-Bars",
   "8 V-Ups", "9 second Handstand Hold", "10 Push-Ups", "11 Overhead Walking Lunges (2x45/25 lb)", "12 Dumbbell Thrusters (2x45/25 lb)",
    "Start with 1 Burpee. Then do 2 Strict Pull-Ups and 1 Burpee. Then 3 Knees-to-Elbows, 2 Strict Pull-Ups, and 1 Burpee Continue this way until the final round of 12 Dumbbell Thrusters 11 Overhead Walking Lunges, and each movement descending in repetitions all the way down to 1 Burpee.With a running clock, complete the prescribed work in the order written as fast as possible (“For Time“)."],
   ["LAPS OF DOOM", "For Time (in a Team of 4)", "200 meter Sprint (each). Then, complete: 50 meter Battle Cancer Equipment Carry / Partner Hold", "Time Cap: 9 minutes", "With a running clock, complete 200 meter Run for each athlete. Once one athlete is done with the 200 meter Run, that athlete will tag the next athlete to do the 200 meter Sprint. Once all the team members are done with 200 meter Sprint, two athletes will work at a time to carry the Battle Cancer equipment until 50 meters is completed while the other partner is holding a Partner Carry.", 
   "Score is the time on the clock when the 50 meter Weighted Carry is completed. With a running clock, complete 200 meter Run for each athlete. Once one athlete is done with the 200 meter Run, that athlete will tag the next athlete to do the 200 meter Sprint. Once all the team members are done with 200 meter Sprint, two athletes will work at a time to carry the Battle Cancer equipment until 50 meters is completed while the other partner is holding a Partner Carry."], ["THE RUNNING DEAD", "For Time", "600 meter Run",
   "15 Kettlebell Devil Presses (2x70/53 lb)", "600 meter Run", "With a running clock, complete the prescribed work in the order written as fast as possible (“For Time“)."], ["OH MY SWEET LEGGINGS", "For Time", "20-16-12-8 calorie Row", "26 Pistols", "8-12-16-20 Overhead Squats (60/40 kg)",
   "With a running clock, complete the prescribed work in the order written as fast as possible (“For Time“). Athlete must complete 20 calorie Row, 26 Pistols, 8 Overhead Squats for the first round. For the second round, athlete will then perform 16 calorie Row, 26 Pistols, 12 Overhead Squats, etc.With a running clock, complete the prescribed work in the order written as fast as possible (“For Time“). Athlete must complete 20 calorie Row, 26 Pistols, 8 Overhead Squats for the first round. For the second round, athlete will then perform 16 calorie Row, 26 Pistols, 12 Overhead Squats, etc."],
["12 DAYS OF DB CHRISTMAS", "For Time", "1 Dumbbell Turkish Get-Up (50/35 lb)", "2 Strict Toes-to-Bar", "3 Burpees Over the Dumbbell", "4 Dumbbell Power Snatches (alternating) (50/35 lb)", "5 Supermans", "6 Push-Ups", "7 Single Dumbbell Front Squats (50/35 lb)", "8 Single-Arm Dumbbell Hang Power Cleans (50/35 lb)", "9 Dumbbell Sumo Deadlifts (50/35 lb)", "10 Walking Lunge Steps (alternating)", "11 Strict Sit-Ups", "12 Dumbbell Swings (50/35lb)", "Start with 1 Turkish Get-Up (TGU). Then do 2 Strict Toes-to-Bar and 1 TGU. Then 3 Burpees Over the Dumbbell, 2 Strict Toes-to-Bar, and 1 TGU. Continue this way until the final round of 12 Dumbbell Swings, 11 Strict Sit-Ups, and each movement descending in repetitions all the way down to 1 TGU — for 364 repetitions total.",
["IT", "3 Rounds for Time", "21 Burpees to Target", "15 Hang Squat Cleans (155/105 lb)", "9 Bar Muscle-Ups", "With a running clock, complete 3 rounds of the prescribed work in the order written as fast as possible (“For Time“)."]],
["MOUNT KILIMANJARO", "For Time", "800 meter Run", "40 Box Step-Ups (30/24 in)", "600 meter Run", "30 Box Jump Overs (30/24 in)", "400 meter Run", "20 Box Step-Ups (30/24 in)", "200 meter Run", "10 Box Jump Overs (30/24 in)", "With a running clock, complete the prescribed work in the order written as fast as possible (“For Time“). "], ["ANTIPOLIS HOME WOD 46", "4 Rounds for Time", "10 Plank Rows (50/35 lb, each side)", "10 Skull Crushers (50/35 lb)",
"10 Bulgarian Split Squats", "10 Single-Leg Romanian Deadlifts (50/35 lb)", "With a running clock, complete 4 rounds of the prescribed work in the order written."]]
 let beginner = [["Run for your life"]]
 let advancedButton = document.getElementById("slide2-button");
 let beginnerButton = document.getElementById("slide1-button");

 // function to create HTML syntax for a list from an array//

function createList (arr) {
        let exTable = `<h3>Choose an exercise routine!</h3> <ol>`;
        for (let i = 0 ; i < arr.length; i++){
            if (arr === advanced){
                let listItem = `<li><button class="advanced" id="list-item${i+1}">${arr[i][0]}</button></li>`;
                exTable += listItem
            } else {
                let listItem = `<li><button class="beginner" id="list-item${i+1}">${arr[i][0]}</button></li>`;
                exTable += listItem
            }
            
        }
        exTable + `</ol>`;
        return exTable;
}

console.log(createList(advanced))
//Function HTML syntax created from an  array and inserts into DOM //

function displayList(arr){
    let exList = createList(arr);
    return document.getElementById("display-exercise").innerHTML = exList;
}

// Create a list of the chosen exercise//
function createExerciseList (arr,num){
        let exerciseListTable = `<h3>You have Chosen ${arr[num][0]}! Good luck!</h3> <ol class="exerciseListTable">`;
        for (let i = 1 ; i < arr[num].length; i++){
            let listItem = `<li >${arr[num][i]}</li>`;
            exerciseListTable += listItem
        }
        exerciseListTable + "</ol>";
        return exerciseListTable;
}

// function to insert Exercise list into DOM //

function displayChosenEx(arr,num){
    let exList = createExerciseList(arr,num);
    return document.getElementById("display-exercise").innerHTML = exList;
}



// event listeners to display list of exercises //
advancedButton.addEventListener("click", function(){displayList(advanced)});
beginnerButton.addEventListener("click", function(){displayList(beginner)});


// Add event listener to help display the exercise routine //

document.addEventListener('click', event => {
    if (event.target.matches("#list-item1" && ".advanced") ){
        displayChosenEx(advanced,0);
    } else if (event.target.matches("#list-item2")) {
        displayChosenEx(advanced,1);
    }
    
  })