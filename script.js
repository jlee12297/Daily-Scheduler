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
    } else if (currentHour > i+9 && currentHour < 16) {
        rowId[i].setAttribute("style", "background-color:green;");
        rowDescriptions[i].setAttribute("style", "background-color:green;");
    } else {
        rowId[i].setAttribute("style", "background-color:gray;");
        rowDescriptions[i].setAttribute("style", "background-color:gray;");

}}