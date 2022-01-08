const advanced = [
   ["THE GOOD THE BAD AND THE UGLY", "For Time", "200 Double-Unders", "1,500/1,250 meter Row", "30 Shoulder-to-Overheads (155/105 lb)",
       "100 Double-Unders", "1,000/800 meter Row", "20 Shoulder-to-Overheads (155/105 lb)", "50 Double-Unders", "500/400 meter Row",
       "10 Shoulder-to-Overheads (155/105 lb)", "With a running clock, complete the prescribed work in the order written as fast as possible (“For Time“)."
   ],
   ["HAMMERHEAD SHARK", "5 Rounds for Time", "21 Toes-to-Rings", "7 Power Cleans (185/125 lb)", "With a running clock, complete 5 rounds of the prescribed work in the order written as fast as possible (“For Time“)."],
   ["ONE ZONE HOME WOD 44", "3 Rounds for Time", "400 meter Run", "21 V-Ups", "15 Hand Release Push-Ups", "Time Cap: 15 minutes",
       "With a running clock, complete 3 rounds of the prescribed work in the order written as fast as possible (“For Time“)."
   ],
   ["211221-MAYHEM", "For Time", "1 Burpee", "2 Strict Pull-Ups", "3 Knees-to-Elbows", "4 Strict Handstand Push-Ups", "5 Box Jump Overs (24/20 in)", "6 Pistols", "7 Kipping Toes-to-Bars",
       "8 V-Ups", "9 second Handstand Hold", "10 Push-Ups", "11 Overhead Walking Lunges (2x45/25 lb)", "12 Dumbbell Thrusters (2x45/25 lb)",
       "Start with 1 Burpee. Then do 2 Strict Pull-Ups and 1 Burpee. Then 3 Knees-to-Elbows, 2 Strict Pull-Ups, and 1 Burpee Continue this way until the final round of 12 Dumbbell Thrusters 11 Overhead Walking Lunges, and each movement descending in repetitions all the way down to 1 Burpee.With a running clock, complete the prescribed work in the order written as fast as possible (“For Time“)."
   ],
   ["LAPS OF DOOM", "For Time (in a Team of 4)", "200 meter Sprint (each). Then, complete: 50 meter Battle Cancer Equipment Carry / Partner Hold", "Time Cap: 9 minutes", "With a running clock, complete 200 meter Run for each athlete. Once one athlete is done with the 200 meter Run, that athlete will tag the next athlete to do the 200 meter Sprint. Once all the team members are done with 200 meter Sprint, two athletes will work at a time to carry the Battle Cancer equipment until 50 meters is completed while the other partner is holding a Partner Carry."],
   ["THE RUNNING DEAD", "For Time", "600 meter Run",
       "15 Kettlebell Devil Presses (2x70/53 lb)", "600 meter Run", "With a running clock, complete the prescribed work in the order written as fast as possible (“For Time“)."
   ],
   ["OH MY SWEET LEGGINGS", "For Time", "20-16-12-8 calorie Row", "26 Pistols", "8-12-16-20 Overhead Squats (60/40 kg)",
       "With a running clock, complete the prescribed work in the order written as fast as possible (“For Time“). Athlete must complete 20 calorie Row, 26 Pistols, 8 Overhead Squats for the first round. For the second round, athlete will then perform 16 calorie Row, 26 Pistols, 12 Overhead Squats, etc.With a running clock, complete the prescribed work in the order written as fast as possible (“For Time“). Athlete must complete 20 calorie Row, 26 Pistols, 8 Overhead Squats for the first round. For the second round, athlete will then perform 16 calorie Row, 26 Pistols, 12 Overhead Squats, etc."
   ],
   ["12 DAYS OF DB CHRISTMAS", "For Time", "1 Dumbbell Turkish Get-Up (50/35 lb)", "2 Strict Toes-to-Bar", "3 Burpees Over the Dumbbell", "4 Dumbbell Power Snatches (alternating) (50/35 lb)", "5 Supermans", "6 Push-Ups", "7 Single Dumbbell Front Squats (50/35 lb)", "8 Single-Arm Dumbbell Hang Power Cleans (50/35 lb)", "9 Dumbbell Sumo Deadlifts (50/35 lb)", "10 Walking Lunge Steps (alternating)", "11 Strict Sit-Ups", "12 Dumbbell Swings (50/35lb)", "Start with 1 Turkish Get-Up (TGU). Then do 2 Strict Toes-to-Bar and 1 TGU. Then 3 Burpees Over the Dumbbell, 2 Strict Toes-to-Bar, and 1 TGU. Continue this way until the final round of 12 Dumbbell Swings, 11 Strict Sit-Ups, and each movement descending in repetitions all the way down to 1 TGU — for 364 repetitions total."],
   ["IT", "3 Rounds for Time", "21 Burpees to Target", "15 Hang Squat Cleans (155/105 lb)", "9 Bar Muscle-Ups", "With a running clock, complete 3 rounds of the prescribed work in the order written as fast as possible (“For Time“)."],
   ["MOUNT KILIMANJARO", "For Time", "800 meter Run", "40 Box Step-Ups (30/24 in)", "600 meter Run", "30 Box Jump Overs (30/24 in)", "400 meter Run", "20 Box Step-Ups (30/24 in)", "200 meter Run", "10 Box Jump Overs (30/24 in)", "With a running clock, complete the prescribed work in the order written as fast as possible (“For Time“). "]
]

const beginner = [
   ["THE GHOST", "3 rounds of:", "1 minute of rowing", "1 minute of burpees", "1 minute of jump rope", "1 minute of rest"],
   ["LIGHT LINDA", "15-12-9-6-3 reps for time of:", "Deadlift, 65/95", "Bench press, 45/65", "Squat clean, 35/45"],
   ["HALF CHELSEA", "Every minute on the minute for 10 minutes perform:",
       "3 ring rows", "6 elevated push-ups", "9 squats", "If you fall behind the clock, keep going for 10 minutes and see how many rounds you can complete."
   ],
   ["EXTENDED ELIZABETH", "21-15-9 reps for time:", "Power cleans", "Jumping ring dips"],
   ["DOUBLE ISABEL", "For time:", "30 snatches"],
   ["NASTY GIRLS V2", "3 rounds for time of:", "25 squats", "5 assisted pull-ups", "10 hang power cleans"],
   ["HOLLEYMAN", "10 rounds for time of:", "5 wall-ball shots", "3 push-ups", "1 power clean"],
   ["JERRY", "For time:", "Run 800 meters", "Row 1,000 meters", "Run 800 meters"],
   ["MAXTON", "5 rounds for time of:", "4 assisted pull-ups", "13 box step-ups", "11 burpees"],
   ["NATE", "Complete as many rounds as possible in 20 minutes of:", "4 assisted pull-ups", "4 assisted dips", "4 assisted handstand push-ups", "8 kettlebell swings"]
]

const advancedButton = document.getElementById("slide2-button");
const beginnerButton = document.getElementById("slide1-button");
const randomButton = document.getElementById("random-button");
const timerButton = document.getElementById("timer-button");

/**Function creates HTML ordered list
 * form elements in an array
 */

function createList(arr) {
   let exTable = `<h3 class="list-header">Choose an exercise routine!</h3> 
                  <ol class="exercise-list">`;
   for (let i = 0; i < arr.length; i++) {
       if (arr === advanced) {
           let listItem = ` <li>
                                <button id="adlist-item${i+1}">${arr[i][0]}</button>
                            </li>`;
           exTable += listItem;
       } else {
           let listItem = `<li>
                                 <button id="belist-item${i+1}">${arr[i][0]}</button>
                           </li>`;
           exTable += listItem ;
       }

   }
   exTable + `</ol>`;
   return exTable;
}


/**
 * Function inserts HTML created by creatlist function
 */

function displayList(arr) {
   let exList = createList(arr);
   return document.getElementById("display-exercise").innerHTML = exList;
}

/**
 * function creates HTML ol from arrays in array
 */

function createExerciseList(arr, num) {
   let exerciseListTable = `<h3 class="list-header">You have Chosen ${arr[num][0]}! Good luck!</h3> 
                            <ol class="exercise-list">`;
   for (let i = 1; i < arr[num].length; i++) {
       let listItem = `<li class="chosen-list">${arr[num][i]}</li>`;
       exerciseListTable += listItem ;
   }
   exerciseListTable + "</ol>";
   return exerciseListTable;
}

/**
 * Function inserts list created by createExerciseList
 */

function displayChosenEx(arr, num) {
   let exList = createExerciseList(arr, num);
   return document.getElementById("display-exercise").innerHTML = exList;
}

/**
 * event listeners for created list, calls function
 */

advancedButton.addEventListener("click", function() {
   displayList(advanced)
});
beginnerButton.addEventListener("click", function() {
   displayList(beginner)
});


/**
 * Event listener loop, checks which button was chosen
 */

document.addEventListener("click", event => {
    for (let i = 1; i<11; i++){
        if (event.target.matches(`#adlist-item${i}`)){
            displayChosenEx(advanced, i-1);
        } else if (event.target.matches(`#belist-item${i}`)){
            displayChosenEx(beginner, i-1);
        }
    }
   }
)

/** 
 * function to display 2 buttons for beginner or advanced
 */

function randomChoice() {

   let chooseLevel = `<h3 class="list-header">Do you want a Beginner or Advanced workout?</h3> 
                      <button id="random-beginner" class="random-btn">Beginner</button> 
                      <button id="random-advanced" class="random-btn">Advanced</button>`;
   document.getElementById("display-exercise").innerHTML = chooseLevel;
}

randomButton.addEventListener("click", function() {
   randomChoice()
});

/**
 * event listener function
 * generate random number 
 * display list from array 
 * with index random number
 */

document.addEventListener("click", event => {
   if (event.target.matches("#random-beginner")) {
       let numOne = Math.floor(Math.random() * 10);
       displayChosenEx(beginner, numOne);
   } else if (event.target.matches("#random-advanced")) {
       let numTwo = Math.floor(Math.random() * 10);
       displayChosenEx(advanced, numTwo);
   }
})

/**
 * Stopwatch
 * declare variables 
 */

let appendSeconds = document.getElementById("seconds");
let appendMinutes = document.getElementById("minutes");
let seconds = 0;
let min = 0;
let interval;
let stopwatchStart = document.getElementById("stopwatch-start");
let stopwatchStop = document.getElementById("stopwatch-stop");
let stopwatchReset = document.getElementById("stopwatch-reset");

/**
 * Functions 
 * increment seconds and minutes
 * sets limit for seconds
 * add 0 to single digits
 * append DOM
 * 
 */

function start() {
   seconds++;
   if (seconds < 9) {
       appendSeconds.innerHTML = "0" + seconds;
   }

   if (seconds > 9) {
       appendSeconds.innerHTML = seconds;
   }

   if (seconds > 59) {
       min++;
       appendMinutes.innerHTML = "0" + min;
       seconds = 0;
       appendSeconds.innerHTML = "0" + 0;
   }

   if (min > 9) {
       appendMinutes.innerHTML = min;
   }
}

/**
 * Event listener 
 * starts function 
 * set interval
 */

stopwatchStart.addEventListener("click", function() {
   if (seconds > 0 || min > 0) {
       // pass //  
   } else {
       interval = setInterval(start, 1000);
   }
})

/**
 * Stop stopwatch
 */

stopwatchStop.addEventListener("click", function() {
   clearInterval(interval);
})

/**
 * Reset stopwatch
 * reset min and seconds
 * append DOM
 */

stopwatchReset.addEventListener("click", function() {
   clearInterval(interval);
   seconds = "00";
   min = "00";
   appendSeconds.innerHTML = seconds;
   appendMinutes.innerHTML = min;
})