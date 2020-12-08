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

// able to add different colors depend on pass events
$("time-block").each(function(){
let present=parseInt($(this).attr("id"))

if(currentHour > present){
    $(this).addClass("Past")
    console.log=("past wow it looks so different")
}
else if (present === currentHour){
    $(this).addClass("present")
}
 else {(present < currentHour)
$(this).addClass("future")
}

})

// able to save the events on calendar



