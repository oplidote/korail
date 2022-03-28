$(document).ready(function () {
    // 모달창
    let $modal = $('.modal');
    let $modal_close = $('.modal-close');
    let $comment_bt = $('.comment-bt');
    $modal_close.click(function () {
        $('html').css('overflow-y', 'auto');
        $modal.fadeOut(300);
    });
    $comment_bt.click(function () {

        $(this).hide();
        $(this).text('닫기').show(300);
        if($modal.hasClass('comment-on')){
            $(this).hide();
            $(this).text('리뷰 및 개선사항').show(300);
        }
        $modal.toggleClass('comment-on');
    });
    
    let nav = $('.nav');
    let gnb = $('.gnb');
    let gnb_li = $('.gnb>li');
    let gnb_a = $('.gnb>li>a');
    let sub_menu = $('.sub-menu');
    let header = $('.header');
    let header_main = $('.header-main');
    // 헤더 마우스 호버
    gnb.mouseenter(function () {
        header.addClass('header-on');
        sub_menu.addClass('sub-menu-on');
    })

    // gnb-a-focus
    $.each(gnb_li, function (index, item) {
        $(this).mouseenter(function () {
            let ul_height = $(this).find('ul').height();
            header.addClass('header-on');
            gnb.find('ul').stop().fadeOut(300);
            $(this).find('ul').stop().fadeIn(300);
            header_main.height(ul_height + 100);
            gnb_a.removeClass('gnb-a-focus');
            $(this).children('a').addClass('gnb-a-focus');
        })
    });

    // 헤더 색상 해제
    nav.mouseleave(function () {
        gnb.find('ul').stop().fadeOut(300);
        gnb_a.removeClass('gnb-a-focus');
        header.removeClass('header-on');
        sub_menu.removeClass('sub-menu-on');
        header_main.height(100);
    });

    // 챗봇
    function chatbot_scroll() {
        let sc = $(window).scrollTop();
        let chatbot = $('.chatbot');
        if (sc >= 1) {
            chatbot.addClass('chatbot-scroll');
        } else {
            chatbot.removeClass('chatbot-scroll');
        }
    }
    chatbot_scroll();


    // 자주찾는 메뉴 언어 파트
    let h_link_menu = $('.header-link-menu');
    let h_link_lang = $('.header-link-lang');

    h_link_menu.click(function () {
        h_link_menu.toggleClass('header-link-menu-on');
    });
    h_link_lang.click(function () {
        h_link_lang.toggleClass('header-link-lang-on');
    });

    // 비주얼 슬라이드 오토플레이 on/off 버튼
    let visual_pause = $('.visual-pause');
    let visual_play = $('.visual-play');
    visual_pause.click(function () {
        $(this).toggleClass('visual-play');
        if ($(this).hasClass('visual-play')) {
            visual_swiper.autoplay.stop();
        } else {
            visual_swiper.autoplay.start();
        }
    })
    // 내려서 더보기
    let visual_down = $('.visual-down');
    visual_down.click(function(){
        $('html,body').animate({
            scrollTop:quick_top
        },500)
    });
    // 비주얼 슬라이드 
    var visual_swiper = new Swiper(".sw-visual-slide", {
        spaceBetween: 30,
        effect: "fade",
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".sw-visual-pagination",
            clickable: true,
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        on: {
            activeIndexChange: function () {
                let visual_control_txt_list = [
                    'KTX 산천 북한강철교 운행',
                    '임진강 철도교량 점검',
                    'KTX 승무원 고객응대',
                    '전동열차 코로나19 방역',
                ];
                let visual_control_txt = $('.visual-control-txt');
                let i = this.realIndex;
                visual_control_txt.html('<span>' + visual_control_txt_list[i] + '</span>');
            }
        }
    });
    // 비주얼 팝업 슬라이드
    var visual_sw = new Swiper(".visual-sw", {
        loop: true,
        pagination: {
            el: ".v-popup-pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: ".v-popup-next",
            prevEl: ".v-popup-prev",
        },
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        }
    });
    // 비주얼 팝업 슬라이드 오토플레이 on/off 버튼
    let sw_popup_pause = $('.sw-popup-pause');
    sw_popup_pause.click(function () {
        $(this).toggleClass('sw-popup-play');
        if ($(this).hasClass('sw-popup-play')) {
            visual_sw.autoplay.stop();
        } else {
            visual_sw.autoplay.start();
        }
    });
    // 커리어 팝업 슬라이드 오토플레이 on/off 버튼
    sw_popup_pause.click(function () {
        $(this).toggleClass('sw-popup-play');
        if ($(this).hasClass('sw-popup-play')) {
            career_sw.autoplay.stop();
        } else {
            career_sw.autoplay.start();
        }
    });
    // 배너 슬라이드 오토플레이 on/off 버튼
    let sw_banner_pause = $('.sw-banner-pause');
    sw_banner_pause.click(function () {
        $(this).toggleClass('sw-banner-play');
        if ($(this).hasClass('sw-banner-play')) {
            banner_sw.autoplay.stop();
        } else {
            banner_sw.autoplay.start();
        }
    });

    // 서치 버튼
    let search_bt = $('.search-bt');
    let search_close_bt = $('.search-close');
    let search_wrap = $('.search-wrap');
    search_bt.click(function () {
        search_wrap.addClass('search-wrap-on');
    });
    search_close_bt.click(function () {
        search_wrap.removeClass('search-wrap-on');
    });


    // 자주 찾는 메뉴 슬라이드
    var quick_swiper = new Swiper(".sw-quick-slide", {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: ".quick-slide-next",
            prevEl: ".quick-slide-prev",
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 5,
                spaceBetween: 50,
            },
            1200: {
                slidesPerView: 7,
                spaceBetween: 50,

            },
        },
    });
    // 주요 사업 슬라이드
    var business_sw = new Swiper(".sw-business-slide", {
        slidesPerView: 'auto',
        centeredSlides: true,
        loop: true,
        navigation: {
            nextEl: ".business-slide-next",
            prevEl: ".business-slide-prev",
        },
        on: {
            slideChange: function () {}
        }
    });

    // 커리어 팝업 슬라이드
    var career_sw = new Swiper(".career-sw", {
        loop: true,
        pagination: {
            el: ".c-popup-pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: ".c-popup-next",
            prevEl: ".c-popup-prev",
        },
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        }
    });
    // 배너 슬라이드
    var banner_sw = new Swiper(".sw-banner-slide", {
        slidesPerView: '4',
        loop: true,
        navigation: {
            nextEl: ".sw-banner-next",
            prevEl: ".sw-banner-prev",
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        }
    });
    let quickmenu = $('.quickmenu');
    let business = $('.business');
    let news = $('.news');
    let career = $('.career');
    // section top 값
    let visual_top = $('.visual').offset().top;
    let quick_top = $('.quickmenu').offset().top;
    let business_top = $('.business').offset().top;
    let news_top = $('.news').offset().top;
    let career_top = $('.career').offset().top;
    // secition 높이 값
    let visual_h = $('.visual').height();
    let quick_h = $('.quickmenu').height();
    let business_h = $('.business').height();
    let news_h = $('.news').height();
    let career_h = $('.career').height();
    // 자주 찾는 메뉴 온 애니메이션
    function quickOn() {
        let sc = $(window).scrollTop();
        if (sc >= quick_top - quick_h) {
            quickmenu.addClass('quickmenu-on');
        }
        // 다시 숨기기
        // else {
        //     quickmenu.removeClass('quickmenu-on');
        // }
    }

    // 주요 사업 온 애니메이션
    function businessOn() {
        let sc = $(window).scrollTop();
        if (sc >= quick_top) {
            business.addClass('business-on');
        }
        // 다시 숨기기
        // else {
        //     business.removeClass('business-on');
        // }
    }
    // 뉴스 온 애니메이션
    function newsOn() {
        let sc = $(window).scrollTop();
        if (sc >= business_top + (business_h / 2)) {
            news.addClass('news-on');
        }
        // 다시 숨기기
        // else {
        //     news.removeClass('news-on');
        // }
    }
    // 뉴스 온 애니메이션
    function careerOn() {
        let sc = $(window).scrollTop();
        if (sc >= news_top + news_h) {
            career.addClass('career-on');
        }
        // 다시 숨기기
        // else {
        //     news.removeClass('news-on');
        // }
    }


    quickOn();
    businessOn();
    newsOn();
    careerOn();
    // 뉴스 타이틀 버튼
    let news_main_top = $('.news-main-top');
    let news_all_bt = $('.news-all-bt');
    let notice_bt = $('.notice-bt');
    let press_bt = $('.press-bt');

    let news_list = $('.news-list');
    let notice_item = $('.notice-item');
    let press_item = $('.press-item');

    function newsAll() {
        news_main_top.find('div').removeClass('news-focus');
        news_main_top.addClass('news-all-focus');
        news_list.children('').addClass('news-item-active');
    };
    newsAll();
    news_all_bt.click(function () {
        newsAll();
    });
    notice_bt.click(function () {
        news_main_top.find('div').removeClass('news-focus');
        news_main_top.removeClass('news-all-focus');
        news_list.children('').removeClass('news-item-active');
        notice_item.addClass('news-item-active');
        notice_bt.addClass('news-focus');
    });
    press_bt.click(function () {
        news_main_top.find('div').removeClass('news-focus');
        news_main_top.removeClass('news-all-focus');
        news_list.children('').removeClass('news-item-active');
        press_item.addClass('news-item-active');
        press_bt.addClass('news-focus');
    });
    // 푸터 링크 버튼 
    let site_box = $('.site-box');
    let family_site = $('.family-site');
    let site_link = $('.site-link');
    family_site.click(function () {
        if ($(this).hasClass('site-on')) {
            $(this).removeClass('site-on');
        } else {
            site_box.find('div').removeClass('site-on');
            $(this).addClass('site-on');
        }
    })
    site_link.click(function () {
        if ($(this).hasClass('site-on')) {
            $(this).removeClass('site-on');
        } else {
            site_box.find('div').removeClass('site-on');
            $(this).addClass('site-on');
        }
    })
    // 스크롤 시 함수 실행
    $(window).scroll(function () {
        console.log($(window).scrollTop());
        console.log(business_top);
        chatbot_scroll();
        quickOn();
        businessOn();
        newsOn();
        careerOn();
    });
    $(window).resize(function () {
        chatbot_scroll();
        quickOn();
        businessOn();
        newsOn();
        careerOn();
    });
})