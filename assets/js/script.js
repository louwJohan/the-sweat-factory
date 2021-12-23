let intermediate = [["The Good the Bad and the Ugly","For Time", "200 Double-Unders", "1,500/1,250 meter Row", "30 Shoulder-to-Overheads (155/105 lb)",
    "100 Double-Unders", "1,000/800 meter Row", "20 Shoulder-to-Overheads (155/105 lb)", "50 Double-Unders", "500/400 meter Row",
    "10 Shoulder-to-Overheads (155/105 lb)", "With a running clock, complete the prescribed work in the order written as fast as possible (“For Time“)."], ["Hammerhead Shark", "5 Rounds for Time",
    "21 Toes-to-Rings", "7 Power Cleans (185/125 lb)", "With a running clock, complete 5 rounds of the prescribed work in the order written as fast as possible (“For Time“)."],
    ["One Zone Home WOD 44", "3 Rounds for Time", "400 meter Run", "21 V-Ups", "15 Hand Release Push-Ups", "Time Cap: 15 minutes",
    "With a running clock, complete 3 rounds of the prescribed work in the order written as fast as possible (“For Time“)."], ["211221-Mayhem", "For Time",
    "1 Burpee", "2 Strict Pull-Ups", "3 Knees-to-Elbows", "4 Strict Handstand Push-Ups", "5 Box Jump Overs (24/20 in)", "6 Pistols", "7 Kipping Toes-to-Bars",
   "8 V-Ups", "9 second Handstand Hold", "10 Push-Ups", "11 Overhead Walking Lunges (2x45/25 lb)", "12 Dumbbell Thrusters (2x45/25 lb)",
    "Start with 1 Burpee. Then do 2 Strict Pull-Ups and 1 Burpee. Then 3 Knees-to-Elbows, 2 Strict Pull-Ups, and 1 Burpee Continue this way until the final round of 12 Dumbbell Thrusters 11 Overhead Walking Lunges, and each movement descending in repetitions all the way down to 1 Burpee.With a running clock, complete the prescribed work in the order written as fast as possible (“For Time“)."] ];

// function to create HTML syntax//

function createList(){
        let exTable = "<ol>";
        for (let i = 0 ; i < intermediate.length; i++){
            let listItem = `<li>${intermediate[i][0]}</li>`;
            exTable += listItem
        }
        exTable + "</ol>";
        return exTable;
}


//Function takes HTML syntax and inserts into DOM

function displayList(){
    let exList = createList();
    return document.getElementById("display-exercise").innerHTML = exList;
}

let intermediateButton = document.getElementById("slide1-button");

intermediateButton.addEventListener("click", displayList);

console.log(intermediateButton);