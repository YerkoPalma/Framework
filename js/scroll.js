$(document).ready(function(){
	
	$('body').prepend('<div id="scrollbar-track"><div id="scrollbar"></div></div>');
	
	function scrollBar(){
	
		var viewportHeight = $(window).height();
		var docuHeight = $(document).height();
		
		var trackHeight = $('#scrollbar-track').height();
		
		var scrollbarHeight = (viewportHeight/docuHeight)*trackHeight;
		
		$('#scrollbar').height(scrollbarHeight);
		
		$('#scrollbar').draggable({
			axis: 'y',
			containment: 'parent',
			drag: function() {
				var scrollbarTop = parseInt($(this).css('top'));
				
				var scrollTopNew = (scrollbarTop/(trackHeight))*docuHeight;
				
				$(window).scrollTop(scrollTopNew);
				
			}
		});
		
		$("body").bind("mousewheel", function (event, delta) {
			
			var scrollTop = $(window).scrollTop();
			var scrollTopNew = scrollTop - (delta * 40);                       
                            
                            $(window).scrollTop(scrollTopNew);
                            
                            var scrollbarTop = ($(window).scrollTop()/docuHeight)*trackHeight;
                    
                            $('#scrollbar').css({
                                    top: scrollbarTop
                            });
                        
		});
	 
	}
	
	scrollBar();
	
	$(window).resize(function(){
		scrollBar();
	});
	

        
});