$(document).ready(function(){
    
    var toggle = document.getElementById("nav_btn");
    var gnbview = document.getElementById("gnb");
    var navbg = document.getElementById("navigation");
    toggle.onclick = function(){
        toggle.classList.toggle('on');
        gnbview.classList.toggle('on');
        navbg.classList.toggle('on');
    }
    
    
    $(window).resize(function(){
        if( $(window).width() < 1024){
            $("#gnb").css("transition","1000ms");
        }else{
            $("#gnb").css("transition" ,"0ms").removeClass('on');
            $("#navigation").removeClass('on');
            $("#nav_btn").removeClass('on');
        }
    });
     
    
    
    $("#main>div").eq(0).addClass("main_active");
    $("#gnb>li").eq(0).addClass("g_active");
    
    $("#gnb>li").eq(0).click(function(){
       $("#main>div").removeClass("main_active");
        $("#gnb>li").removeClass("g_active");
        if($(this).hasClass("g_active") === false){
            $(this).addClass("g_active");
            $("#main>div").eq(0).addClass("main_active");
            toggle.classList.toggle('on');
        gnbview.classList.toggle('on');
        navbg.classList.toggle('on');
        }
    });
    
    $("#gnb>li").eq(1).click(function(){
       $("#main>div").removeClass("main_active");
        $("#gnb>li").removeClass("g_active");
        if($(this).hasClass("g_active") === false){
            $(this).addClass("g_active");
            $("#main>div").eq(1).addClass("main_active");
            toggle.classList.toggle('on');
        gnbview.classList.toggle('on');
        navbg.classList.toggle('on');
        }
    });
});



    

   
        