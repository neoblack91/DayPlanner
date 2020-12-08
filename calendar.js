// interactive day planner
$("#currentDay").text(luxon.DateTime.local().toLocaleString({
     weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' }));

//  Make the calendar editable
function timetravel(){
let hourPlan = luxon.DateTime.local().toLocaleString({hour: 2-digit})
}

let currentHour =parseInt(hourPlan[0] + hourPlan[1])
if (hourPlan.indexof("am")){
    currentHour -=12
    console.log(currentHour)
}



// able to save the events on calendar
// able to add different colors depend on pass events


