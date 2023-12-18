

var startDate = new Date(2022,10,10);
var el = document.getElementById("DatePicker");
 
// *** Create the component and handle the callback
DatePickerNative(el, startDate, function(dt, event) {
    // updated date is returned
    console.log(dt.toLocaleString());

    // update date display   
    showDate(dt,"ActiveDate");
});

showDate(startDate,"ActiveDate"); // initial display 