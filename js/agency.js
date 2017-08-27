var x=0;

(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 0
  });

  // Closes responsive menu when a link is clicked
  $('.navbar-collapse>ul>li>a').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Collapse the navbar when page is scrolled
  $(window).scroll(function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  });
  $('a[href="#dummy"]').click(function(){
	//var closeButton=document.createElement("button");
	//var controlDiv=document.createElement("div");
	//controlDiv.className="leaflet-control";
	//closeButton.type="button";
	//closeButton.className="btn btn-primary";
	//closeButton.setAttribute("data-dismiss","modal");
	//closeButton.textContent="Закрыть карту";
	//controlDiv.appendChild(closeButton);
	//var placeDiv=document.getElementsByClassName("leaflet-bottom leaflet-left");
	//placeDiv[0].appendChild(controlDiv);
	
	
	
	var window.fSBut=document.getElementsByClassName("dg-control-round leaflet-control");
	var window.fullScreen=document.getElementsByClassName("dg-control-round__icon dg-control-round__icon_name_fullscreen");
	window.fSBut[0].setAttribute("style","display:none");
	
	window.fullScreen[0].click();
	
	//tmp=document.getElementBy
	if(x!=1)
	{ 
		var closeButton=document.createElement("button");
		var controlDiv=document.createElement("div");
		controlDiv.className="leaflet-control";
		closeButton.type="button";
		closeButton.id="mapclose";
		closeButton.className="btn btn-primary";
		closeButton.setAttribute("data-dismiss","modal");
		closeButton.textContent="Закрыть карту";
		controlDiv.appendChild(closeButton);
		var placeDiv=document.getElementsByClassName("leaflet-bottom leaflet-left");
		placeDiv[0].appendChild(controlDiv);
		x=1;
		map.invalidateSize();
	}
  map.invalidateSize();
  });
  $("button[id='mapclose']").click(function(){
	  //if(document.webkitiIsFullscreen)
	  //  {
	  //      document.webkitCancelFullscreen();
	  //  }
		window.fullScreen[0].click();
  });
  $(window).on(Event.LOAD,function() {
	
    $("#mainNav").addClass("navbar-shrink");
  });
  // $(window).onload(function() {
    
  //       $("#mainNav").addClass("navbar-shrink");
  //     });
})(jQuery); // End of use strict
