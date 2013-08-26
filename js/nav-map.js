$(document).ready(function(){
    
    var activePage = $(".active-page").attr("id").split("_");
    var activeSection = $(".active-page").attr("title");
    var x, y;
    
    x = parseInt(activePage[0]);
    y = parseInt(activePage[1]);   
    
    $(".header").children().text(activeSection).fadeIn("slow");
    
    $("#_0_0").addClass("active");
    $(".info").text($(".active-page").attr("title"));
    
    $("#arrow-up").click(function(){        
        
        activePage = $(".active-page").attr("id").split("_");
        activeSection = $(".active-page").attr("title");
        x, y;
    
        x = parseInt(activePage[0]);
        y = parseInt(activePage[1]);
        /* Si se mueve hacia arriba, se resta uno al eje y */
        x = x - 1;
        
        if ($("#" + x + "_" + y).length > 0){
        
            $("#_"+x+"_"+y).trigger("click");
        } else {
            x = x + 1;            
        }
    });
    
    $("#arrow-down").click(function(){        
        
        activePage = $(".active-page").attr("id").split("_");
        activeSection = $(".active-page").attr("title");
        x, y;
    
        x = parseInt(activePage[0]);
        y = parseInt(activePage[1]);
        
        /* Si se mueve hacia arriba, se resta uno al eje y */
        x = x + 1;
        
        if ($("#" + x + "_" + y).length > 0){
        
            $("#_"+x+"_"+y).trigger("click");
        } else {
            x = x - 1;            
        }
    });
    
    $("#arrow-left").click(function(){       
        
        activePage = $(".active-page").attr("id").split("_");
        activeSection = $(".active-page").attr("title");
        x, y;
    
        x = parseInt(activePage[0]);
        y = parseInt(activePage[1]);
        
        /* Si se mueve hacia arriba, se resta uno al eje y */
        y = y - 1;
        
        if ($("#" + x + "_" + y).length > 0){
        
            $("#_"+x+"_"+y).trigger("click");
        } else {
            y = y + 1;            
        }
    });
    
    $("#arrow-right").click(function(){    
        
        activePage = $(".active-page").attr("id").split("_");
        activeSection = $(".active-page").attr("title");
        x, y;
    
        x = parseInt(activePage[0]);
        y = parseInt(activePage[1]);
        
        /* Si se mueve hacia arriba, se resta uno al eje y */
        y = y + 1;
        
        if ($("#" + x + "_" + y).length > 0){
        
            $("#_"+x+"_"+y).trigger("click");
        } else {
            y = y - 1;            
        }
    });
    
    $("#home-icon").click(function(){
        
        x = 0;
        y = 0;
        
        $("#_"+x+"_"+y).trigger("click");
    });
});