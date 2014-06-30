$(document).on("ready",inicio);

function inicio(){

	$('#divA').on("click",openGCAE);
	$('#divB').on("click",openTrium);
	$('#divC').on("click",openProgram);
	$('#divD').on("click",openContacto);
	$('body').on("click",closeProgram);

}

function resetHome(){
	var resetCuadros = {
		"margin-top":"10%",
		"margin-bottom":"10%",
		"margin-left": "auto",
		"margin-right": "auto",
		"width":"660px",
	};
	var resetCuadrosDiv = {
		"display":"inline-block",
		"border-radius": "10px"
	};
	var resetCuadros250 = {
		"width":"250px"
	}
	var resetCuadros350 = {
		"width":"350px"
	}
	var resetSlideH = {
		"height":0
	};

	var resetSlideV = {
		"width":0
	};

	$('#cuadros').css(resetCuadros);
	$('#cuadros div').css(resetCuadrosDiv);
	$('#divA,#divD').css(resetCuadros350);
	$('#divB,#divC').css(resetCuadros250);
	$('#gcae,#contacto').css(resetSlideH);
	$('#trium').css(resetSlideV);
	$('#cuadros').css(resetCuadros);

}

function openTrium(){
	resetHome();
	var cambiosCSS = 
	{
		width:"70%",
		"background-color": "green"
	};
	var cambiosCuadros = {
		"margin-left":"75%",
		"width":"25%",
		"margin-top":"3%"
	}
	var cssDivA = {
		"display":"none"
	}
	var circulosTrium = {
	 	width: "200px",
	   	height: "200px",
	   	"border-radius": "100px"
	}
	$('#cuadros div').css(circulosTrium);
	$('#divB').css(cssDivA);
	$('#cuadros').css(cambiosCuadros);
	$('#trium').css(cambiosCSS);
}

function openProgram(){
	resetHome();
	var cambiosCSS = 
	{
		visibility:"visible"
	};
	$('#services').css(cambiosCSS);
	var cambiosCSS = 
	{
		opacity: .8
	};
	$('#services').css(cambiosCSS);
}

function closeProgram(){
	
	var mouse_is_inside;
	$('#services').hover(function(){ 
        mouse_is_inside=true; 
    }, function(){ 
        mouse_is_inside=false; 
    });

	$("body").mouseup(function(){ 
        if(! mouse_is_inside) {
        	//$('#services').hide();
        	var cambiosCSS = 
			{
				visibility:"hidden"
			};
			$('#services').css(cambiosCSS);


        }
    });

	
}

function openGCAE(){
	resetHome();
	var cambiosCSS = 
	{
		height:"300px",
		"background-color": "orange",
		"box-shadow":"5px 5px 5px 3px #222"
	};
	var cambiosCuadros = {
		"margin-top":"350px",
		"width":"980px"
	}
	var cambiosCuadrosDiv = {
		"width":"300px",
	}
	var cssDivA = {
		"display":"none"
	}
	$('#divA').css(cssDivA);
	$('#cuadros').css(cambiosCuadros);
	$('#cuadros div').css(cambiosCuadrosDiv);
	$('#gcae').css(cambiosCSS);
}

function openContacto(){
	resetHome();
	var cambiosCSS = 
	{
		height:"450px",
		"box-shadow":"-5px -5px 5px 3px #222"
	};
	var cambiosCuadros = {
		"margin-top":"50px",
		"width":"980px"
	}
	var cssDivD = {
		"display":"none"
	}
	var cambiosCuadrosDiv = {
		"width":"300px",
	}
	$('#divD').css(cssDivD);
	$('#cuadros').css(cambiosCuadros);
	$('#cuadros div').css(cambiosCuadrosDiv);
	$('#contacto').css(cambiosCSS);
}