$(document).ready(function(){
    
    var toggle = $("#nav_btn");
    var gnbview = $("#gnb");
    var navbg = $("#nav_bg");
    toggle.click(function() {
        toggle.toggleClass('on');
        gnbview.toggleClass('on');
        navbg.toggleClass('on');
        $("html, body").toggleClass('scroll_off');
    });
    
    
    $(window).resize(function(){
        if( $(window).width() >= 1023){
            gnbview.removeClass('on');
            toggle.removeClass('on');
            navbg.removeClass('on');
        }
    });
     
    
    
    $(".about").addClass("main_active");
    $(".gnb_tab1").addClass("g_active");
    
    $(".gnb_tab1").click(function(){
        $("#main>div").removeClass("main_active");
        $("#gnb>li").removeClass("g_active");
        if($(this).hasClass("g_active") === false){
            $(this).addClass("g_active");
            $(".about").addClass("main_active");
            toggle.toggleClass('on');
            gnbview.toggleClass('on');
            navbg.removeClass('on');
            $("html, body").removeClass('scroll_off');
        }
    });
    
    $(".gnb_tab2").click(function(){
        $("#main>div").removeClass("main_active");
        $("#gnb>li").removeClass("g_active");
        if($(this).hasClass("g_active") === false){
            $(this).addClass("g_active");
            $(".timeline").addClass("main_active");
            toggle.toggleClass('on');
            gnbview.toggleClass('on');
            navbg.removeClass('on');
            $("html, body").removeClass('scroll_off');
        }
    });
    
    $(".gnb_tab3").click(function(){
        $("#main>div").removeClass("main_active");
        $("#gnb>li").removeClass("g_active");
        if($(this).hasClass("g_active") === false){
            $(this).addClass("g_active");
            $(".portfolio").addClass("main_active");
            toggle.toggleClass('on');
            gnbview.toggleClass('on');
            navbg.removeClass('on');
            $("html, body").removeClass('scroll_off');
        }
    });
    
    
    $(".gnb_tab4").click(function(){
        $("#main>div").removeClass("main_active");
        $("#gnb>li").removeClass("g_active");
        if($(this).hasClass("g_active") === false){
            $(this).addClass("g_active");
            $(".contact").addClass("main_active");
            toggle.toggleClass('on');
            gnbview.toggleClass('on');
            navbg.removeClass('on');
            $("html, body").removeClass('scroll_off');
        }
    });
    
    
    $(".portfolio_img").click(function(){
       $(this).siblings('div').addClass('open');
    });
    
    $(".portfolio_item>img").click(function(){
            $(this).siblings('div').addClass("open");
    });
        
    $(".portfolio_detail, .close_btn").click(function(){
        $(".portfolio_detail").removeClass("open");
    });
    
    
    
//    // 기존 정보 담기
//      let lastFocus, activeModal;
//
//      // 모달 열기
//      function OpenModal(lastElement, targetId) {
//        activeModal = targetId;
//        lastFocus = lastElement || document.activeElement;
//
//        // open
//        const modal = document.querySelector(`[data-modal-id="${targetId}"]`);
//        modal.classList.add('open');
//
//        // document 스크롤 잠그기
//        document.documentElement.classList.add('scroll-lock');
//
//        // autofocus 하기
//        if ( modal.querySelector('[autofocus]') !== null ) {
//          modal.querySelector('[autofocus]').focus();
//        }
//      }
//
//      // 버튼 액션 추가
//      const modalButtons = document.querySelectorAll('[data-modal-target]');
//      Array.from(modalButtons, (img) => {
//        img.addEventListener('click', () => {
//          const targetId = img.dataset.modalTarget;
//          OpenModal(img, targetId);
//        });
//      });
//
//      // 모달 바깥 클릭하면 닫히게
//      const modals = document.querySelectorAll('.modal');
//      modals.forEach((element) => {
//        element.addEventListener('click', (event) => {
//          if ( event.target.classList.contains('modal') ) {
//            closeModal();
//          }
//        })
//      });
//
//      // 닫기 처리
//      function closeModal() {
//        document.querySelector(`[data-modal-id="${activeModal}"]`).classList.remove('open');
//        document.documentElement.classList.remove('scroll-lock');
//        lastFocus.focus();
//      }
//    
    
    
});



    

   
        