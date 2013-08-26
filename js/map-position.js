$(document).ready(function(){
    
    /*2. Dimensiones de ventana*/
        var wHeight = $(window).height();
        var wWidth = $(window).width();   
    
    $(".page").each(function(){
        
        /*
            1. Obtener coordenadas
            2. Obtener dimensiones de la ventana
            3. Calcular posicion        
        */
       
        /*1. Coordenadas*/
        var coordenadas = $(this).attr("id").split("_");
        
        $(this).css("height", wHeight + "px");
        $(this).css("width", wWidth + "px");
        
        /*3. Calcular posicion*/
        var pageHeight = coordenadas[0] * wHeight;
        var pageWidth = coordenadas[1] * wWidth;
        
        $(this).css("top", pageHeight + "px");
        $(this).css("left", pageWidth + "px");
        
        $(".last").removeClass("last");
        $(".map").append('<div class="map-area last" id="_'+coordenadas[0]+'_'+coordenadas[1]+'"></div>');
        
        $(".map-area.last").css("top", ((coordenadas[0] * 15) + 80) + "px");
        $(".map-area.last").css("left", ((coordenadas[1] * 15) + 60) + "px");
        
        $(".map-area.last").click(function(){
                
                $(".active-page").removeClass("active-page");
                $.scrollTo($("#" + coordenadas[0] + "_" + coordenadas[1]), 800);
                $("#" + coordenadas[0] + "_" + coordenadas[1]).addClass("active-page");
                $("#title").hide().delay(800).text($(".active-page").attr("title")).fadeIn("slow");
                
                $(".map-area.active").removeClass("active");
                $(this).addClass("active");
                
                $(".info").text($(".active-page").attr("title"));
        });
    });   
    
});