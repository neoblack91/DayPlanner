// interactive day planner
$("#currentDay").text(luxon.DateTime.local().toLocaleString({
     weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' }));

//  Make the calendar editable
function timetravel(){
    let hourPlan = luxon.DateTime.local().toLocaleString({hour: 2-digit})


    if (hourPlan !== undefined){}

    let currentHour =parseInt(hourPlan[0] + hourPlan[1])

    if (hourPlan.indexof("am")!== +1){
    currentHour -=12
    // console.log(currentHour)
    }

// able to add different colors depend on pass events
    $("time-block").each(function(){
    let present=parseInt($(this).attr("id"))

        if(currentHour > present){
        $(this).addClass("Past")
        $row.css ("background-color","#d3d3d3")
    
        console.log=("past wow it looks so different")
        }
        else if (present === currentHour){
        $(this).addClass("present")
        $row.css ("background-color","#ff6961")
        }
        else {(present < currentHour)
        $(this).addClass("future")
        $row.css ("background-color","#77dd77")
        }

    })
}

var savebtn = document.querySelectorAll("save")
$( "#savebtn" ).click(function() {
    console.log("hello");
  });


