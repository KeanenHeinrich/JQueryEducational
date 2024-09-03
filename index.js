$(function(){
    $(".nav").animate({top: 0, transition: "1.2s"});
    $("h3").animate({top: 0, transition: "1.2s"});
    $("header").animate({top: 0, transition: "1.2s"});
    $("#hidden").hide(1450, function(){
        $("#main").fadeIn(800, function(){
            $(".row-left").slideDown(700);
            $(".row-right").slideDown(700);
            $(".row-middle").slideDown(700);
        });
    })
    $(".column-middle").mouseenter(function(){
        $(this).css("transform", "scale(1.2)").css("z-index", 10).animate({borderLeftWidth : "1px", borderRightWidth: "1px"});
        $(".row-middle").css("transition", "1s").css("z-index", 10).css("transform", "scale(1.2) translate(0, 10.5%)").animate({borderLeftWidth : "1px", borderRightWidth: "1px"});
    });
    $(".column-middle").mouseleave(function(){
        $(this).css("transform", "scale(1.0)").css("z-index", 0).animate({borderLeftWidth : "0px", borderRightWidth: "0px"});
        $(".row-middle").css("transition", "1s").css("z-index", 0).css("transform", "scale(1.0) translate(0, 0%)").animate({borderLeftWidth : "0px", borderRightWidth: "0px"});
    });

    $(".column-left").mouseenter(function(){
        $(this).css("transform", "scale(1.2)").css("z-index", 10);
        $(".row-left").css("transition", "1s").css("z-index", 10).css("transform", "scale(1.2) translate(0, 10.5%)");
    });
    $(".column-left").mouseleave(function(){
        $(this).css("transform", "scale(1.0)").css("z-index", 0);
        $(".row-left").css("transition", "1s").css("z-index", 0).css("transform", "scale(1.0) translate(0, 0%)");
    });

    $(".column-right").mouseenter(function(){
        $(this).css("transform", "scale(1.2)").css("z-index", 10);
        $(".row-right").css("transition", "1s").css("z-index", 10).css("transform", "scale(1.2) translate(0, 10.5%)");
    });
    $(".column-right").mouseleave(function(){
        $(this).css("transform", "scale(1.0)").css("z-index", 0);
        $(".row-right").css("transition", "1s").css("z-index", 0).css("transform", "scale(1.0) translate(0, 0%)");
    });
});