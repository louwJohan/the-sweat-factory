let intermediate = [["The Good the Bad and the Ugly","For Time", "200 Double-Unders", "1,500/1,250 meter Row", "30 Shoulder-to-Overheads (155/105 lb)",
    "100 Double-Unders", "1,000/800 meter Row", "20 Shoulder-to-Overheads (155/105 lb)", "50 Double-Unders", "500/400 meter Row",
    "10 Shoulder-to-Overheads (155/105 lb)", "With a running clock, complete the prescribed work in the order written as fast as possible (“For Time“)."], ["Hammerhead Shark", "5 Rounds for Time",
    "21 Toes-to-Rings", "7 Power Cleans (185/125 lb)", "With a running clock, complete 5 rounds of the prescribed work in the order written as fast as possible (“For Time“)."],
    ["One Zone Home WOD 44", "3 Rounds for Time", "400 meter Run", "21 V-Ups", "15 Hand Release Push-Ups", "Time Cap: 15 minutes",
    "With a running clock, complete 3 rounds of the prescribed work in the order written as fast as possible (“For Time“)."], ["211221-Mayhem", "For Time",
    "1 Burpee", "2 Strict Pull-Ups", "3 Knees-to-Elbows", "4 Strict Handstand Push-Ups", "5 Box Jump Overs (24/20 in)", "6 Pistols", "7 Kipping Toes-to-Bars",
   "8 V-Ups", "9 second Handstand Hold", "10 Push-Ups", "11 Overhead Walking Lunges (2x45/25 lb)", "12 Dumbbell Thrusters (2x45/25 lb)",
    "Start with 1 Burpee. Then do 2 Strict Pull-Ups and 1 Burpee. Then 3 Knees-to-Elbows, 2 Strict Pull-Ups, and 1 Burpee Continue this way until the final round of 12 Dumbbell Thrusters 11 Overhead Walking Lunges, and each movement descending in repetitions all the way down to 1 Burpee.With a running clock, complete the prescribed work in the order written as fast as possible (“For Time“)."],
   ["Laps of Doom", "For Time (in a Team of 4)", "200 meter Sprint (each). Then, complete: 50 meter Battle Cancer Equipment Carry / Partner Hold", "Time Cap: 9 minutes", "With a running clock, complete 200 meter Run for each athlete. Once one athlete is done with the 200 meter Run, that athlete will tag the next athlete to do the 200 meter Sprint. Once all the team members are done with 200 meter Sprint, two athletes will work at a time to carry the Battle Cancer equipment until 50 meters is completed while the other partner is holding a Partner Carry.", 
   "Score is the time on the clock when the 50 meter Weighted Carry is completed. With a running clock, complete 200 meter Run for each athlete. Once one athlete is done with the 200 meter Run, that athlete will tag the next athlete to do the 200 meter Sprint. Once all the team members are done with 200 meter Sprint, two athletes will work at a time to carry the Battle Cancer equipment until 50 meters is completed while the other partner is holding a Partner Carry." ] ];

// function to create HTML syntax for a list from an array//

function createList (arr) {
        let exTable = "<ol>";
        for (let i = 0 ; i < arr.length; i++){
            let listItem = `<li id="list-item${i+1}"><button>${arr[i][0]}</button></li>`;
            exTable += listItem
        }
        exTable + "</ol>";
        return exTable;
}

//Function HTML syntax created from an  array and inserts into DOM //

function displayList(arr){
    let exList = createList(arr);
    return document.getElementById("display-exercise").innerHTML = exList;
}

let intermediateButton = document.getElementById("slide1-button");

intermediateButton.addEventListener("click", function(){displayList(intermediate)});
