$(function() {
    $("button", "#one").on("click", function(){
        $("#two").show();
    });
    $("button", "#two").on("click",function(){
        $("#three").show();
    });
    $("button", "#three").on("click",function(){
        $("#four").show();
    });
    $("button", "#four").on("click",function(){
        $("#five").show();
        $('body').css('background-color', 'yellow')
    });
});
