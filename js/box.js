$(document).ready(function(){
    
    $(".box").click(function(){        
        
        $(".active-box").removeClass("active-box");
        $(this).addClass("active-box");
        $(".box:not(.active-box)").animate({height: "0px", width: "0px", margin: "0px"}, 500);
        $(this).animate({
            
            width: "770px",
            height: "630px",
            //top: "10px",
            //left: "10px",             
            display: "block"
            
            }, 500);
        //alert("me ejecuto!");
    });
    
    $(".close-button").click(function(event){
        
        event.preventDefault();
        event.stopPropagation();
        $(this).parent().parent().removeClass("active-box");
        
        $(".box").each(function(){
            
            $(this).animate({
            
                width: "370px",
                height: "130px",
                margin: "10px",
                top: "auto",
                left: "auto",
                display: "inline"
                
            
            }, 500);           
            
        });
        
        //$(this).parent().parent().data("events").preventDefault();
        
    });
});