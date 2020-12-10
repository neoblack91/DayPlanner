    // interactive day planner

    $("#currentDay").text(luxon.DateTime.local().toLocaleString({
     weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' }));

//  Make the calendar editable
    function timetravel(){
    let hourPlan = luxon.DateTime.local().toLocaleString({hour:2-digit})

    let currentHour =parseInt (hourPlan[0] + hourPlan[1])

    if (hourPlan.indexof("am")!== +1){
    currentHour -=12
    // console.log(currentHour)
    }

    // able to add different colors depend on pass events
    }

    $("text").each(function(){
    let timeNow=parseInt($(this).attr("id"))

        if(currentHour < timeNow){
        $(this).addClass("#d3d3d3")
        // $row.css ("background-color","#d3d3d3")
    
        console.log=("past wow it looks so different")
        }
        else if (present === timeNow){
        $(this).addClass("#ff6961")
        // $row.css ("background-color","#ff6961")
        }
        else {(present > timeNow)
        $(this).addClass("#77dd77")
        // $row.css ("background-color","#77dd77")
        }

    })
           
// save message
           
           $( ".saveBtn" ).click(function() {
           console.log("yay it works")
            //setting items in the local storage
                localStorage.setItem("9", $9am),
                localStorage.setItem("10", $10am),
                localStorage.setItem("11", $11am),
                localStorage.setItem("12", $12pm),
                localStorage.setItem("13", $1pm),
                localStorage.setItem("14", $2pm),
                localStorage.setItem("15", $3pm),
                localStorage.setItem("16", $4pm),
                localStorage.setItem("17", $5pm),
           }),    
           
                $("#text9AM").append(localStorage.getItem("9")),
                $("#text10AM").append(localStorage.getItem("10")),
                $("#text11AM").append(localStorage.getItem("11")),
                $("#text12AM").append(localStorage.getItem("12")),
                $("#text1PM").append(localStorage.getItem("13")),
                $("#text2PM").append(localStorage.getItem("14")),
                $("#text3PM").append(localStorage.getItem("15")),
                $("#text4PM").append(localStorage.getItem("16")),
                $("#text5PM").append(localStorage.getItem("17")),
        )
           