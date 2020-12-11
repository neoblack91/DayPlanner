    // interactive day planner

    $("#currentDay").text(luxon.DateTime.local().toLocaleString({
     weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' }));

//  Make the calendar editable
    
    let hourPlan = luxon.DateTime.local().toLocaleString({hour:'2-digit'})

    let currentHour =parseInt(hourPlan[0] + hourPlan[1])

    if (hourPlan.indexOf("am")!== +1){
    currentHour +=12
    console.log(currentHour)
    }

    // able to add different colors depend on pass events
    

    $(".text").each(function(){
    let timeNow=parseInt($(this).parent().attr("id"))
    console.log(timeNow)
        $(this).val(localStorage.getItem(timeNow));
        if(currentHour < timeNow){
        $(this).parent().addClass("past")
        // $row.css ("background-color","#d3d3d3")
    
        console.log=("past wow it looks so different")
        }
        else if (currentHour === timeNow){
        $(this).parent().addClass("present")
        // $row.css ("background-color","#ff6961")
        }
        else {(currentHour > timeNow)
        $(this).parent().addClass("future")
        // $row.css ("background-color","#77dd77")
        }

    })
           
// save message
           var saveBtn = $(".saveBtn")
           $(".saveBtn").on ("click",function() {
           console.log("yay it works")

           let timeBlock = $(this).parent().attr("id");
           
           let input= $(this).prev().val();
           localStorage.setItem(timeBlock, input)
            console.log(input)
           
           })     
           
     
        
           