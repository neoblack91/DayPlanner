$(document).ready(function () {
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
    $("testarea").each(function(){
        let timeNow=parseInt($(this).attr("id"))

        if(currentHour > timeNow){
        $(this).addClass("#d3d3d3")
        // $row.css ("background-color","#d3d3d3")
    
        console.log=("past wow it looks so different")
        }
        else if (present === timeNow){
        $(this).addClass("#ff6961")
        // $row.css ("background-color","#ff6961")
        }
        else {(present < timeNow)
        $(this).addClass("#77dd77")
        // $row.css ("background-color","#77dd77")
        }

        })
    
    }

        

           $( "#savebtn" ).click(function() { 
            //setting items in the local storage
            localStorage.setItem("9AM", ($text9AM.val()))
            localStorage.setItem("10AM", ($text10AM.val()))
            localStorage.setItem("11AM", ($text11AM.val()))
            localStorage.setItem("12AM", ($text12AM.val()))
            localStorage.setItem("13PM", ($text1PM.val()))
            localStorage.setItem("14PM", ($text2PM.val()))
            localStorage.setItem("15PM", ($text3PM.val()))
            localStorage.setItem("16PM", ($text4PM.val()))
            localStorage.setItem("17PM", ($text5PM.val()))
               
            });
            $("#text9AM").append(localStorage.getItem("9AM"));
            $("#text10AM").append(localStorage.getItem("10AM"));
            $("#text11AM").append(localStorage.getItem("11AM"));
            $("#text12AM").append(localStorage.getItem("12AM"));
            $("#text1PM").append(localStorage.getItem("13PM"));
            $("#text2PM").append(localStorage.getItem("14PM"));
            $("#text3PM").append(localStorage.getItem("15PM"));
            $("#text4PM").append(localStorage.getItem("16PM"));
            $("#text5PM").append(localStorage.getItem("17PM"));
        
        })




