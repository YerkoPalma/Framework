$(document).ready(function(){
    
    /*****************
        blur-menu
    ******************/    
    
    $(".blur-menu-trigger").click(function(event){
        
        event.preventDefault();
        var menuTarget = $(this).attr("href");
        //alert(menuTarget);
        $(menuTarget).animate({            
            
            width: "100%",
            height: "100%"
            
            }, 400, function(){
                
                $(".blur-menu > li").each(function(){
                    
                    //alert($(this).html());
                    $(this).fadeIn(); 
                    $(this).children().fadeIn();    
                });    
        });        
        
    });
    
    $(".blur-menu a.exit").click(function(event){
        
        event.preventDefault();
        $(".blur-menu > li").fadeOut("fast", function(){
            var menuID = $(".blur-menu").parent().attr("id");
            $("#" + menuID).animate({
                
                height: "0px"
                
                }, 400);
            });
        
    });
    
    /****************
        word.menu
    *****************/
    $(".word-menu-trigger").click(function(event){
        
        event.preventDefault();
        var menuTarget = $(this).attr("href");
        //alert(menuTarget);
        $(menuTarget).animate({            
            
            width: "100%",
            height: "100%"
            
        }, 400, function(){
                
            $(".word-menu > li").each(function(){
                    
                //alert($(this).html());
                $(this).fadeIn("slow"); 
                $(this).children().fadeIn("slow");
                    
                var thisTop = $(this).position().top;
                    
                $(this).attr("id", thisTop + "px");
                    
                $(this).children().hover(function(){
                    
                    $(this).css("color","#ffffff");
                    //$(this).stop();
                        
                    $(".selector").animate({
                            
                        top: thisTop + "px"
                    }, 100);                       
                        
                }, function(){
                        
                    $(this).css("color","#ffffff");
                        
                });
            });
                
            var selectorTop = $(".word-menu").css("margin-top");
            $(".selector").css("margin-top", selectorTop);
                
            $(".selector").fadeIn("slow");                
        });        
    });
    
    $(".word-menu a.exit").click(function(event){
        
        event.preventDefault();
        $(".selector").fadeOut("fast");
        $(".word-menu > li").fadeOut("fast", function(){
            var menuID = $(".word-menu").parent().attr("id");
            $("#" + menuID).animate({
                
                height: "0px"
                
                }, 400);
            });
        
    });
    
    /******************
        LETTER-MENU
    *******************/
    
    $(".letter-menu-trigger").click(function(event){
        
        event.preventDefault();
        var menuTarget = $(this).attr("href");
        //alert(menuTarget);
        $(menuTarget).animate({            
            
            width: "100%",
            height: "100%"
            
            }, 400, function(){
                
                 $(".letter-menu > li").each(function(){
                    
                    //alert($(this).html());
                    $(this).fadeIn(); 
                    $(this).children().fadeIn().html($(this).children().text().replace(/./g, "<span class='hidden-letter'>$&</span><span>$&</span>"));
                    
                });     
        });        
        
    });
    
    
    
});