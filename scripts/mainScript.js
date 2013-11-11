  /* *****************************************
   *  	      Cerna's Lawn Services          *
   *        Website Custom JavaScript        *
   *	*	*	*	*	*	*	*	*	*	 * 
   *	       Designed And Developed        *
   *	       			By	                 *
   *	       Christopher W Gonzalez	     *
   *	         D.K.A. "GchrisWill"		 *
   *	                               		 *
   *	         gchriswill@me.com           *
   ***************************************** */
   
//alert("Note: Please be aware that this Website is still currently underdevelopment... Thank you");
   

// DOM Shortcuts Object ===================================================
var short = {
	domId     : function (x) { var idE  = document.getElementById(x); return idE; },
	domClass  : function (x) { var cEle = document.getElementsByClassName(x); return cEle; },
	domTag    : function (x) { var tagE = document.getElementsByTagName(x); return tagE; },        
	domCreate : function (x) { var crtE = document.createElement(x); return crtE; }
};
// End of DOM Shortcuts ===================================================


/* HTML Document Ready JS Function Triger ********************************* */
window.addEventListener("DOMContentLoaded", function() {

		/* Due to CSS issues, 
		JS was used for nav links changing color on hover */
		
		/* Nav About Link ************************************************* */ 
		short.domClass("liLinks")[0].onmouseover = function(){ short.domClass("colorToggle")[0].style.color = "#ffffff"; };
		short.domClass("liLinks")[0].onmouseout  = function(){ short.domClass("colorToggle")[0].style.color = "#137937"; };
		
		/* Nav Services&Prices Link */
		short.domClass("liLinks")[1].onmouseover = function(){ short.domClass("colorToggle")[1].style.color = "#ffffff"; };
		short.domClass("liLinks")[1].onmouseout  = function(){ short.domClass("colorToggle")[1].style.color = "#137937"; };
		
		/* Nav Areas Link */
		short.domClass("liLinks")[2].onmouseover = function(){ short.domClass("colorToggle")[2].style.color = "#ffffff"; };
		short.domClass("liLinks")[2].onmouseout  = function(){ short.domClass("colorToggle")[2].style.color = "#137937"; };
		
		/* Nav Contac Us Link */
		short.domClass("liLinks")[3].onmouseover = function(){ short.domClass("colorToggle")[3].style.color = "#ffffff"; };
		short.domClass("liLinks")[3].onmouseout  = function(){ short.domClass("colorToggle")[3].style.color = "#137937"; };
		// End of Issue //////////////////////////////////////////////////////

		/* Team Animation ************************************************* */
		short.domId("team1").onmouseover 					   = function(){ 
			short.domClass("teamAnimate1")[0].style.transition = "opacity 0.5s linear 0s"; 
			short.domClass("teamAnimate1")[0].style.opacity    = 0;
			short.domClass("teamAnimate2")[0].style.transition = "opacity 0.5s linear 0s";
			short.domClass("teamAnimate2")[0].style.opacity    = 1;
		};
		short.domId("team1").onmouseout                        = function(){
			short.domClass("teamAnimate1")[0].style.transition = "opacity 0.5s linear 0s";
			short.domClass("teamAnimate1")[0].style.opacity    = 1;
			short.domClass("teamAnimate2")[0].style.transition = "opacity 0.5s linear 0s";
			short.domClass("teamAnimate2")[0].style.opacity    = 0;
		};
		// End of Team Animation /////////////////////////////////////////////
});	
// End of HTML Document Ready JS Function Triger /////////////////////////////	
	

/* Contact Hidden Information Features ************************************* */
var fadeCounter = 0;
var fadeInFrom  = 0;
var fadeOutFrom = 10;	
	
//Show/Hide Trigger Function
var fade              								 = function(){
	if (fadeCounter	=== 0) {
		short.domId("showContact").style.padding     = "3px 3px 5px 3px";
		short.domId("showContact").style.borderLeft  = "2px solid #b22316";
		short.domId("showContact").style.borderTop   = "2px solid #b22316";
		short.domId("showContact").style.borderRight = "2px solid #b22316";
		fadeIn("hidden123");
		slideDown("showDiv1");
		fadeCounter             					 = 1;
	}else if (fadeCounter === 1){
		short.domId("showContact").style.padding 	 = "5px";
		short.domId("showContact").style.border 	 = "none";
		fadeOut("hidden123");
		slideUp("showDiv1");
		fadeCounter             					 = 0;
	};
};
	
//Fade In Feature Function
var fadeIn                   		= function(element){
	var targetElement           	= short.domId(element);
	targetElement.style.display 	= "block";
	var newFadeValue            	= fadeInFrom / 10;
	targetElement.style.opacity 	= newFadeValue;
	fadeInFrom++;
		
	if(fadeInFrom == 10){
		targetElement.style.opacity = 1;
		clearTimeout(loopTimer1);
		fadeInFrom 					= 0;
		return false;
			
	};
	var loopTimer1 					= setTimeout('fadeIn(\''+element+'\')',55);
};	

//Slide Down Function
var slideDown 					= function(element){
	var target 					= short.domId(element);
	var hCheck 					= target.offsetHeight;
	var shhCheck 				= target.scrollHeight;
	var loopTimer 				= setTimeout('slideDown(\''+element+'\')',5);
	if(hCheck < shhCheck){
		hCheck += 10;
	} else {
		clearTimeout(loopTimer);
	}
	target.style.height 		= hCheck+"px";
};

//Fade Out Feature Function
var fadeOut 						= function(element){
	var targetElement 				= short.domId(element);
	var newFadeValue 				= fadeOutFrom / 10;
	targetElement.style.opacity 	= newFadeValue;
	fadeOutFrom--;
		
	if(fadeOutFrom == 0){
		targetElement.style.opacity = 0;
		targetElement.style.display = "none";
		clearTimeout(loopTimer2);
		fadeOutFrom 				= 10;
		return false;
	};
	var loopTimer2 					= setTimeout('fadeOut(\''+element+'\')',55);
};

//Slide Up Feature Function
var slideUp 					= function(element){
	var target 					= short.domId(element);
	var hCheck 					= target.offsetHeight;
	var loopTimer 				= setTimeout('slideUp(\''+element+'\')',5);
	if(hCheck > 0){
		hCheck -= 10;
	} else {
		clearTimeout(loopTimer);
	};
	target.style.height 		= hCheck+"px";
};
// End of Contact Hidden Information Features /////////////////////////////////


/* Slideshow Gallery Player *********************************************** */
var slideCounter 	 = 0;
var slideFadeInFrom  = 0;
var slideFadeOutFrom = 10;	

//Previous Image Trigger Function
var previousArrow 									= function(){
	if (slideCounter === 3) {
		short.domClass("demoImg0")[0].style.display = "none";
		slideFadeOutFunc("demoImg3");
		slideFadeInFunc("demoImg2");
		slideCounter--;
	}else if (slideCounter === 2){
		short.domClass("demoImg0")[0].style.display = "none";
		slideFadeOutFunc("demoImg2");
		slideFadeInFunc("demoImg1");
		slideCounter--;
	}else if (slideCounter === 1){
		slideFadeOutFunc("demoImg1");
		slideFadeInFunc("demoImg0");
		slideCounter--;
	}else if (slideCounter === 0){
		slideFadeOutFunc("demoImg0");
		slideFadeInFunc("demoImg3");
		slideCounter 								= 3;
	};
};	

//Next Image Trigger Function
var nextArrow 										= function(){
	if (slideCounter === 0) {
		slideFadeOutFunc("demoImg0");
		slideFadeInFunc("demoImg1");
		slideCounter++;
	}else if (slideCounter === 1){
		short.domClass("demoImg0")[0].style.display = "none";
		slideFadeOutFunc("demoImg1");
		slideFadeInFunc("demoImg2");
		slideCounter++;
	}else if (slideCounter === 2){
		short.domClass("demoImg0")[0].style.display = "none";
		slideFadeOutFunc("demoImg2");
		slideFadeInFunc("demoImg3");
		slideCounter++;
	}else if (slideCounter === 3){
		slideFadeOutFunc("demoImg3");
		slideFadeInFunc("demoImg0");
		slideCounter 								= 0;
	};
};
	
//Slider Fade In Image Function
var slideFadeInFunc 				= function(element){
	var targetElement           	= short.domClass(element)[0];
	targetElement.style.display 	= "block";
	var newSlideFadeValue       	= slideFadeInFrom / 10;
	targetElement.style.opacity 	= newSlideFadeValue;
	slideFadeInFrom++;
		
	if(slideFadeInFrom == 10){
		targetElement.style.opacity = 1;
		clearTimeout(loopTimer3);
		slideFadeInFrom 			= 0;
		return false;
	};
	var loopTimer3 					= setTimeout('slideFadeInFunc(\''+element+'\')',40);
};
	
//Slider Fade Out Image Function
var slideFadeOutFunc 				= function(element){
	var targetElement 				= short.domClass(element)[0];
	var newSlideFadeValue 			= slideFadeOutFrom / 10;
	targetElement.style.opacity 	= newSlideFadeValue;
	slideFadeOutFrom--;
		
	if(slideFadeOutFrom == 0){
		targetElement.style.opacity = 0;
		targetElement.style.display = "none";
		clearTimeout(loopTimer4);
		slideFadeOutFrom 			= 10;
		return false;
	};
	var loopTimer4 					= setTimeout('slideFadeOutFunc(\''+element+'\')',40);
};
// End of Slideshow Gallery Player ///////////////////////////////////





	
	
	
	
	
	
	