// var today will be used for displaying the current date (month day, year) format in the header
var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

// color code time rows. gray for past hours, red for current, green future hours
var currentHour = moment().hour();

// pulls up an array of all the row ID's of the table
var rowId = document.getElementsByClassName("hour")

// to pull the description columns so we can change their color as well
var rowDescriptions = document.getElementsByClassName("description")

// for loop to compare the row ID position in the array to the current hour, and see if the corresponding hour is current, past, or future to color code
// i+9 makes it so we are connecting each hour position in the index to its actual time (index position 0 is hour9, so add plus 9 to make 9 o clock)
// watching for current hour being below 16 helps to make sure later in the day after 5pm, we see the blocks as having been in the past, rather than resetting as soon as we hit 6PM, and making everything green
for (i=0; i<rowId.length; i++) {
    if (currentHour === i+9 && currentHour < 16) {
        rowId[i].setAttribute("style", "background-color:red;");
        rowDescriptions[i].setAttribute("style", "background-color:red;");
    } else if (currentHour < i+9 && currentHour < 16) {
        rowId[i].setAttribute("style", "background-color:green;");
        rowDescriptions[i].setAttribute("style", "background-color:green;");
    } else {
        rowId[i].setAttribute("style", "background-color:gray;");
        rowDescriptions[i].setAttribute("style", "background-color:gray;");

}}

// variables for the user inputs of the description column for each hour
var description9 = $('input[id="desc9"]').val();
var description10 = $('input[id="desc10"]').val();
var description11 = $('input[id="desc11"]').val();
var description12 = $('input[id="desc12"]').val();
var description13 = $('input[id="desc13"]').val();
var description14 = $('input[id="desc14"]').val();
var description15 = $('input[id="desc15"]').val();
var description16 = $('input[id="desc16"]').val();
var description17 = $('input[id="desc17"]').val();

//runs whenever page loads to render stored descriptions when applicable, for each hour
function renderDesc9() {
    var storedDescription9 = JSON.parse(localStorage.getItem("description9"));
    if (storedDescription9 !== null) {
        $('input[id="desc9"]').val(storedDescription9)
        console.log(storedDescription9);
    } else {
        console.log("cannot find")
        return;
    }
}


// save button event listener functionality. one for each button w/ its corresponding input for description will be made.
//9AM row
var button9 = $('#btn9');

button9.on('click', function () {
    description9 = $('input[id="desc9"]').val();
    console.log(description9);
    localStorage.setItem("description9", JSON.stringify(description9));

    })


//10AM row
var button10 = $('#btn10');

button10.on('click', function () {
    var description10 = $('input[id="desc10"]').val();
    console.log(description10);
    
    })


//11AM row
var button11 = $('#btn11');

button11.on('click', function () {
    var description11 = $('input[id="desc11"]').val();
    console.log(description11);
    
    })


//12PM row
var button12 = $('#btn12');

button12.on('click', function () {
    var description12 = $('input[id="desc12"]').val();
    console.log(description12);
        
    })


//1PM row
var button13 = $('#btn13');

button13.on('click', function () {
    var description13 = $('input[id="desc13"]').val();
    console.log(description13);
    
    })


//2PM row
var button14 = $('#btn14');

button14.on('click', function () {
    var description14 = $('input[id="desc14"]').val();
    console.log(description14);
    
    })


//3PM row
var button15 = $('#btn15');

button15.on('click', function () {
    var description15 = $('input[id="desc15"]').val();
    console.log(description15);
    
    })


//4PM row
var button16 = $('#btn16');

button16.on('click', function () {
    var description16 = $('input[id="desc16"]').val();
    console.log(description16);
    
    })


//5PM row
var button17 = $('#btn17');

button17.on('click', function () {
    var description17 = $('input[id="desc17"]').val();
    console.log(description17);
    
    })

function init() {
    renderDesc9();
}


init();


    