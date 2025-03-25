 $(".dark-btn").click(function(){
        $("body").toggleClass("dark");
        $(".square").toggleClass("dark");
    }
);


$(".spin-btn").click(function(){
    $(".square").toggleClass("spin");
}
);


$(".reveal-btn").click(function(){
    $(".thing").addClass("reveal");
    $(".reveal-btn").hide();
}
);