var level;
var position;

//-----------------HideSlider--------------
$(document).ready(function (){
	var aniclass = "null";
	var escape = "escapeing";
	var elements = 8;
	size = 5;
	
	$(".div_Menu_window_slaider").hide();
	
	for (var i = 2; i <=6; i++){
	$("#div_Menu_window_level" + i).hide();
	};
	//$("div_Menu_window_slaider").css('visibility', 'visible');
/*IOS SLIDERA*/
	$('.iosSlider').iosSlider({
					snapToChildren: true,
					responsiveSlideWidth: true,
					desktopClickDrag: true,
					navPrevSelector: $('.prevButton'),
					navNextSelector: $('.nextButton'),
					onSlideChange: slideContentChange,
					onSlideComplete: slideContentComplete,
					onSliderLoaded: slideContentLoaded,
	});	
	
	
//-------------------------------------------------------
    
    //---------------------domino----------------
    var width = [0.075, 0.061, 0.051];
    var height = [0.15, 0.13, 0.11];
    var simpleWidth = 0;
    var simpleHeight = 0;
    function domino() {
        id = $(this).attr("id");
        clvl = id.substr(5, 1);
        index = id.substr(7, 1);

        var delays = [150, 300, 450, 600, 750, 900];
        

       
        for (var i = 0; i < 6; i++) {
            setTimeout(function () {
                p = 72;
                level = clvl;
                while (level >= 1) {
                    switch (level) {
                        case clvl: simpleWidth = width[0]; simpleHeight = height[0]; break;
                        case clvl -1: simpleWidth = width[1]; simpleHeight = height[1]; break;
                        case clvl -2: simpleWidth = width[2]; simpleHeight = height[2]; break;
                    }
                    $("#level" + level + "_" + index).css({

                        height: ($(this).height() * simpleHeight),
                        width: ($(this).width() * simpleWidth)
                    }).animate({
                        'fontSize': +p + '%'
                    });
                    level--;
                    p -= 22;
                }
                index++;
                if (index == 7) index = 1;

            }, delays[i]);
        }
    };
	$("body").on("click", ".moveXY1", domino);
	$("body").on("click", ".moveXY2", domino);
	$("body").on("click", ".moveXY3", domino);
	$("body").on("click", ".moveXY4", domino);
	$("body").on("click", ".moveXY5", aClick);
    //---------------------------------------------------
	
	$("#wellcome_btn").click(function Escaping(){
		setTimeout(function(){  $(".div_wellcome_holders").addClass(escape) },200) ;
		setTimeout(function(){  $(".div_wellcome_holders").hide() },900);
		setTimeout(function(){  $("#div_Menu_window_level2").show() },900);
		setTimeout(function () { $("#div_Menu_window_level1").hide() }, 900);
	});
	brLevel = 0;
	var oneLeftOrRight = [0, -50, -80, -100, -110], oneTopOrBottom = [0, -50, -80, -100, -110];
	var twoLeftOrRight = [0, 50, 80, 100, 110], twoTopOrBottom = [0, -50, -80, -100, -110];
	var threeLeftOrRight = [0, 50, 100, 130, 150], threeTopOrBottom = [0, 0, 0, 0, 0];
	var fourLeftOrRight = [0, 50, 90, 120, 130], fourTopOrBottom = [0, 50, 90, 120, 130];
	var fiveLeftOrRight = [0, -50, -90, -120, -130], fiveTopOrBottom = [0, 50, 90, 120, 130];
	var sixLeftOrRight = [0, -50, -100, -130, -150], sixTopOrBottom = [0, 0, 0, 0, 0];
	function aClick() {
	    
	    cl = $(this).attr("class");
	    id = $(this).attr("id");
	    clvl = id.substr(5, 1);
	    index = id.substr(7, 1);
	    brLevel = clvl;
	    mask = clvl;
	    mask++;
	    leftOrRight = 0;
	    topOrBottom = 0;
	    br = 1;
	    setTimeout(function () {      
	        $("#div_Menu_window_level" + (mask + 1)).show();
	        if (clvl == '4') {
	            $(".div_Menu_window_slaider").removeClass("hideios").show();
	        }
	        while (br++ <= 6) {
	            level = clvl;
	            
	        while (level >= 1) {
	            switch (index) {
	                case 1: case '1': leftOrRight = oneLeftOrRight[brLevel - level + 1]; topOrBottom = oneTopOrBottom[brLevel - level + 1]; break;
	                case 2: case '2': leftOrRight = twoLeftOrRight[brLevel - level + 1]; topOrBottom = twoTopOrBottom[brLevel - level + 1]; break;
	                case 3: case '3': leftOrRight = threeLeftOrRight[brLevel - level + 1]; topOrBottom = threeTopOrBottom[brLevel - level + 1]; break;
	                case 4: case '4': leftOrRight = fourLeftOrRight[brLevel - level + 1]; topOrBottom = fourTopOrBottom[brLevel - level + 1]; break;
	                case 5: case '5': leftOrRight = fiveLeftOrRight[brLevel - level + 1]; topOrBottom = fiveTopOrBottom[brLevel - level + 1]; break;
	                case 6: case '6': leftOrRight = sixLeftOrRight[brLevel - level + 1]; topOrBottom = sixTopOrBottom[brLevel - level + 1]; break;
	        }
	            $("#level" + (level) + "_" + index).removeClass("InAnim").removeClass("InAnim1").css('position', "relative")
                        .animate({ "left": + leftOrRight + "%", "top": + topOrBottom + "%" }, "slow");
	            $("body").off("click", ".moveXY" + level, aClick);
	            $("body").on("click", ".moveXY" + level, aClickBack);
	            $("body").off("click", ".moveXY" + level, domino);
	            $("body").off("click", ".anim"+level, anim);
	            level--;   
	        }
	        index++;
	        if (index == 7) {
	            index = 1;
	        }
	    }
	    }, 1000);    
}

	$("body").on("click", ".moveXY1", aClick);
	$("body").on("click", ".moveXY2", aClick);
	$("body").on("click", ".moveXY3", aClick);
	$("body").on("click", ".moveXY4", aClick);
	$("body").on("click", ".moveXY5", aClick);
    //------------------------------------------------
    //------------------moveBack------------
	function aClickBack() {
	    
	    id = $(this).attr("id");
	    clvl = id.substr(5, 1);
	    index = id.substr(7, 1);

	    leftOrRight = 0;
	    topOrBottom = 0;
	    br = 1;
	    
	   
	    setTimeout(function () {
	        while (br++ <= 6) {
	           
	            level = brLevel+1;
	        while (level >= clvl) {
	            $("#level" + level + "_" + index).css('position', "relative")
                            .animate({ "left": +leftOrRight + "%", "top": +topOrBottom + "%", "height": +130 + "px", "width": +130 + "px" }, "slow")
                            .animate({
                                //'lineHeight': '-=',
                                'fontSize':+ 100+ '%'
                            });;
	            $("#level" + (level+1) + "_" + index).parents(".div_level_holders").hide("slow")
	            $("body").on("click", ".moveXY" + level, aClick);
	            $("body").off("click", ".moveXY" + level, aClickBack);
	            $("body").on("click", ".moveXY" + level, domino);
	            $("body").on("click", ".anim" + level, anim);
	            level--;
	        }
	        index++;
	        if (index == 7) index = 1;
            }
	    }, 1000);
	    
	    secondBr = 1;
	    setTimeout(function () {
	        brLevel = clvl - 1;
	        while (secondBr++ <= 6) {
	            level = brLevel;
	            
	            while (level >= 1) {
	                simpleHeight = height[brLevel - level ];
	                simpleWidth = width[brLevel - level ];
	             
	                switch (index) {
	                    case 1: case '1': leftOrRight = oneLeftOrRight[brLevel - level + 1]; topOrBottom = oneTopOrBottom[brLevel - level + 1]; break;
	                    case 2: case '2': leftOrRight = twoLeftOrRight[brLevel - level + 1]; topOrBottom = twoTopOrBottom[brLevel - level + 1]; break;
	                    case 3: case '3': leftOrRight = threeLeftOrRight[brLevel - level + 1]; topOrBottom = threeTopOrBottom[brLevel - level + 1]; break;
	                    case 4: case '4': leftOrRight = fourLeftOrRight[brLevel - level + 1]; topOrBottom = fourTopOrBottom[brLevel - level + 1]; break;
	                    case 5: case '5': leftOrRight = fiveLeftOrRight[brLevel - level + 1]; topOrBottom = fiveTopOrBottom[brLevel - level + 1]; break;
	                    case 6: case '6': leftOrRight = sixLeftOrRight[brLevel - level + 1]; topOrBottom = sixTopOrBottom[brLevel - level + 1]; break;
	                }
	                $("#level" + (level) + "_" + index).removeClass("InAnim").removeClass("InAnim1").css('position', "relative")
                            .animate({ "left": +leftOrRight + "%", "top": +topOrBottom + "%" }, "slow");
	                $("#level" + (level) + "_" + index).css({

                                height: ($(this).height() * simpleHeight),
                                width: ($(this).width() * simpleWidth)
                            });
	                
	                level--;
	            }
	            index++;
	            if (index == 7) {
	                index = 1;
	            }
	        }
	    }, 1000);
	}

	$("body").on("click", ".moveXY1", aClick);
	$("body").on("click", ".moveXY2", aClick);
	$("body").on("click", ".moveXY3", aClick);
	$("body").on("click", ".moveXY4", aClick);
	$("body").on("click", ".moveXY5", aClick);
    //---------------------------------------
	function anim() {
	    id = $(this).attr("id");
	    clvl = id.substr(5, 1);
	    index = id.substr(7, 1);
	    var inAnim = "InAnim";
	    var inAnim1 = "InAnim1";
	    var br = 1;
	    if (clvl == '1') {
	      for (var i = 1; i <= 6; i++) {
	            setTimeout(function () {
	                $("#level" + (2) + "_" + index).addClass(inAnim1)
	                index++;
	                if (index == 7) {
	                    index = 1;
	                }
	            });
	        }
	    }
	    else if (clvl == '3') {
	        for (var i = 1; i <= 6; i++) {
	            setTimeout(function () {
	                $("#level" + (4) + "_" + index).addClass(inAnim1)
	                index++;
	                if (index == 7) {
	                    index = 1;
	                }
	            });
	        }
	    }
	    else if (clvl == '2') {
	        for (var i = 1; i <= 6; i++) {
	            setTimeout(function () {
	                $("#level" + (3) + "_" + index).addClass(inAnim);
	                index++;
	                if (index == 7) {
	                    index = 1;
	                }
	            });
	        }
	    }

	    else if (clvl == 'o') {
	        
	        index = 1;
	        for (var i = 1; i <= 6; i++) {
	            setTimeout(function () {
	                $("#level" + (1) + "_" + index).addClass("InAnim0")
	                index++;
	                if (index == 7) {
	                    index = 1;
	                }
	            });
	        }
	        $("body").off("click", "#wellcome_btn", anim);
	    }
	}
	$("body").on("click", ".anim1", anim);
	$("body").on("click", ".anim2", anim);
	$("body").on("click", ".anim3", anim);
	$("body").on("click", ".anim4", anim);
	$("body").on("click", "#wellcome_btn", anim);
});