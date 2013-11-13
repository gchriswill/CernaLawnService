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
   


// DOM Shortcuts Object ======================================================
var short = {
	domId     : function (x) { var idE  = document.getElementById(x); return idE; },
	domClass  : function (x) { var cEle = document.getElementsByClassName(x); return cEle; },
	domTag    : function (x) { var tagE = document.getElementsByTagName(x); return tagE; },        
	domCreate : function (x) { var crtE = document.createElement(x); return crtE; }
};
// End of DOM Shortcuts ======================================================



/* HTML Document Ready JS Function Triger ********************************* */
window.addEventListener("DOMContentLoaded", function() {

		/* Due to CSS3 conflicts, 
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
		
		/* Auto Hide/Show Image Play ************************************** */
		short.domClass("demoImgContainer")[0].onmouseover = function(){
			short.domClass("imgFooter")[0].style.transition = "opacity 0.5s linear 0s";
			short.domClass("imgFooter")[0].style.opacity    = 1;
		};
		short.domClass("demoImgContainer")[0].onmouseout = function(){
			short.domClass("imgFooter")[0].style.transition = "opacity 0.5s linear 0s";
			short.domClass("imgFooter")[0].style.opacity    = 0;
		};
		/* End Of Auto Hide/Show Image Play ******************************* */
});	
// End of HTML Document Ready JS Function Triger /////////////////////////////	
	


/* Global Variables For Animation Features */
var fadeCounter = 0;
var fadeInFrom  = 0;
var fadeOutFrom = 10;

var slideCounter 	 = 0;
var slideFadeInFrom  = 0;
var slideFadeOutFrom = 10;		
	


/* Contact Hidden Information Features ************************************* */

// Show/Hide Trigger Function
var fade              								 = function(fadeDivID, slideDivID){
	if (fadeCounter	=== 0) {
		short.domId("showContact").style.padding     = "3px 3px 5px 3px";
		short.domId("showContact").style.borderLeft  = "2px solid #b22316";
		short.domId("showContact").style.borderTop   = "2px solid #b22316";
		short.domId("showContact").style.borderRight = "2px solid #b22316";
		fadeIn(fadeDivID);
		slideDown(slideDivID);
		fadeCounter             					 = 1;
	}else if (fadeCounter === 1){
		short.domId("showContact").style.padding 	 = "5px";
		short.domId("showContact").style.border 	 = "none";
		fadeOut(fadeDivID);
		slideUp(slideDivID);
		fadeCounter             					 = 0;
	};
};
// End of Contact Hidden Information Features /////////////////////////////////



/* Slideshow Gallery Player ************************************************ */

//Previous Image Trigger Function
var previousArrow 									 = function(controler0, controler1, controler2, controler3){
	if (slideCounter === 3) {
		short.domClass("demoImg0")[0].style.display  = "none";
		short.domTag("li")[7].style.borderBottom 	 = "5px solid transparent";
		short.domTag("li")[6].style.borderBottom 	 = "5px solid rgba(0,0,0,0.50)";
		fadeOut(controler3);
		fadeIn(controler2);
		slideCounter--;
	}else if (slideCounter === 2){
		short.domClass("demoImg0")[0].style.display  = "none";
		short.domTag("li")[6].style.borderBottom 	 = "5px solid transparent";
		short.domTag("li")[5].style.borderBottom 	 = "5px solid rgba(0,0,0,0.50)";
		fadeOut(controler2);
		fadeIn(controler1);
		slideCounter--;
	}else if (slideCounter === 1){
		short.domTag("li")[5].style.borderBottom 	 = "5px solid transparent";
		short.domTag("li")[4].style.borderBottom 	 = "5px solid rgba(0,0,0,0.50)";
		fadeOut(controler1);
		fadeIn(controler0);
		slideCounter--;
	}else if (slideCounter === 0){
	    short.domTag("li")[4].style.borderBottom 	 = "5px solid transparent";
		short.domTag("li")[5].style.borderBottom 	 = "5px solid transparent";
		short.domTag("li")[6].style.borderBottom 	 = "5px solid transparent";
		short.domTag("li")[7].style.borderBottom 	 = "5px solid rgba(0,0,0,0.50)";
		fadeOut(controler0);
		fadeIn(controler3);
		slideCounter 								 = 3;
	};
};	

//Next Image Trigger Function
var nextArrow 										 = function(controler0, controler1, controler2, controler3){
	if (slideCounter === 0) {
		fadeOut(controler0);
		fadeIn(controler1);
		short.domTag("li")[4].style.borderBottom 	 = "5px solid transparent";
		short.domTag("li")[6].style.borderBottom 	 = "5px solid transparent";
		short.domTag("li")[7].style.borderBottom 	 = "5px solid transparent";
		short.domTag("li")[5].style.borderBottom 	 = "5px solid rgba(0,0,0,0.50)";
		slideCounter++;
	}else if (slideCounter === 1){
		short.domClass("demoImg0")[0].style.display  = "none";
		short.domTag("li")[5].style.borderBottom 	 = "5px solid transparent";
		short.domTag("li")[6].style.borderBottom 	 = "5px solid rgba(0,0,0,0.50)";
		fadeOut(controler1);
		fadeIn(controler2);
		slideCounter++;
	}else if (slideCounter === 2){
		short.domClass("demoImg0")[0].style.display  = "none";
		short.domTag("li")[6].style.borderBottom 	 = "5px solid transparent";
		short.domTag("li")[7].style.borderBottom 	 = "5px solid rgba(0,0,0,0.50)";
		fadeOut(controler2);
		fadeIn(controler3);
		slideCounter++;
	}else if (slideCounter === 3){
		short.domTag("li")[7].style.borderBottom 	 = "5px solid transparent";
		short.domTag("li")[4].style.borderBottom 	 = "5px solid rgba(0,0,0,0.50)";
		fadeOut(controler3);
		fadeIn(controler0);
		slideCounter 								 = 0;
	};
};
// End of Slideshow Gallery Player ////////////////////////////////////////////////
	


/* Animation Functions  ******************************************************** */

//Fade In Feature Function
var fadeIn                   		= function(domTarget){
	var targetElement           	= short.domId(domTarget);
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
	var loopTimer1 					= setTimeout('fadeIn(\''+domTarget+'\')', "45");
};

//Fade Out Feature Function
var fadeOut 						= function(domTarget){
	var targetElement 				= short.domId(domTarget);
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
	var loopTimer2 					= setTimeout('fadeOut(\''+domTarget+'\')', "45");
};

//Slide Down Function
var slideDown 					= function(domTarget){
	var target 					= short.domId(domTarget);
	var hCheck 					= target.offsetHeight;
	var shhCheck 				= target.scrollHeight;
	var loopTimer3 				= setTimeout('slideDown(\''+domTarget+'\')', "5");
	if(hCheck < shhCheck){
		hCheck += 10;
	} else {
		clearTimeout(loopTimer3);
	}
	target.style.height 		= hCheck+"px";
};

//Slide Up Feature Function
var slideUp 					= function(domTarget){
	var target 					= short.domId(domTarget);
	var hCheck 					= target.offsetHeight;
	var loopTimer4 				= setTimeout('slideUp(\''+domTarget+'\')', "5");
	if(hCheck > 0){
		hCheck -= 10;
	} else {
		clearTimeout(loopTimer4);
	};
	target.style.height 		= hCheck+"px";
};
/* End Of Animation Functions  ************************************************* */


	