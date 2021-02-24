$(".slide_group").slick({
    autoplay: true, // 자동재생
    autoplaySpeed: 3000, // 간격시간
    dots: true, // 동그라미버튼
    speed: 600, // 바뀌는시간(생략가능)
    slidesToShow: 1, // 보여질슬라이드수(생략가능)
    slidesToScroll: 1, // 이동슬라이드수(생략가능)
    pauseOnHover: true, // 마우스오버시 멈춤여부(생략가능)
    pauseOnDotsHover: true, // 동그라미번호버튼에 호버시 멈춤여부(생략가능)
    pauseOnFocus: false, // 동그라미번호버튼 클릭시 자동실행 멈춤여부
    cssEase: 'linear', // 속도함수(생략가능)
    draggable: true, // 마우스드래그시 슬라이드 교체가능여부(생략가능)
    fade: false, // 슬라이드가 수평으로 이동하지 않고, 제자리에서 사라지고 나타남(생략가능)
    arrows: true, // 좌우화살표 사용여부(생략가능)
    prevArrow: '<button class="prev"><i class="fas fa-angle-left"></i></button>',
    nextArrow: '<button class="next"><i class="fas fa-angle-right"></i></button>',
})

// 변수는 펑션문 밖에서 선언하는 것이 정석임
// p60~61 참고
var num;
$('.cs_board .tabmenu > li').on('click', function(){
    $(this).addClass('active').siblings().removeClass('active')
    // console.log( $(this).index() ) : 콘솔 영역에 인덱스 번호가 뜨는지 확인
    // 변수선언 : var 변수명
    // 변수에 값 저장하기 : 변수명 = 값
    // 변수에는 하나의 값만 저장됌
    num = $(this).index()
    console.log(num)
    $(this).parent().next().children().eq(num).addClass('active').siblings().removeClass('active')
})
var $ibutton;
$('.article1 .plpa').on('click', function(){
    $ibutton = $(this).find('i')
    if ($ibutton.hasClass('fa-pause')) {
        $('.slide_group').slick('slickPause')
        $ibutton.removeClass('fa-pause').addClass('fa-play')
    } else {
        $('.slide_group').slick('slickPlay')
        $ibutton.removeClass('fa-play').addClass('fa-pause')
    }
})
// 열기, 닫기 버튼
$('#header #nav .open').addClass('on')
$('#header #nav .open').on('click', function(){
    $(this).removeClass('on') //
    $(this).next().addClass('on')
    $(this).next().next().addClass('on')
})
$('#header .close').on('click', function(){
    $(this).removeClass('on')
    $(this).prev().removeClass('on')
    $(this).prev().prev().addClass('on') //
})

//함수 선언 - 이 자체로는 아무 수행 안함(호출되어야 기능 수행)
function init(){
    var ww = $(window).width()
    if ( ww>1024 && !$('html').hasClass('pc') ) {
        $('html').addClass('pc').removeClass('mobile')
        $('.search #sbox').removeClass('on')
    } else if ( ww<=1024 && !$('html').hasClass('mobile') ) {
        $('html').addClass('mobile').removeClass('pc')
        $('#header .close').removeClass('on')
        $('#header .depth2').removeClass('on') //
        $('#header .open').addClass('on')
        $('.search #sbox').removeClass('on')
    }
}
//함수 호출 - 최초에 화면 사이즈 출력 대체
init()

//함수 호출 - 리사이즈 시 화면 사이즈 출력 대체
$(window).on('resize', function(){
    init()
})

//pc화면 리사이즈 시 호버
$('#header #nav .depth3 > li').hover(
    function(){
        if ( $('html').hasClass('pc') ) {
            $(this).addClass('on')
        }
    },
    function(){
        if ( $('html').hasClass('pc') ) {
            $(this).removeClass('on')
        }
    }
)

//mobile화면 리사이즈 시 클릭
$('#header #nav .depth3 > li').on('click', function(e){
    if ( $('html').hasClass('mobile') ) {
        e.preventDefault()
        $(this).toggleClass('on')
        $(this).siblings().removeClass('on')
    }
})

//돋보기 클릭 시 검색창 박스 열고 닫기
$('.search label').on('click', function(){
    $(this).prev().toggleClass('on')
})

// 네비게이션 메뉴 픽스
$(window).on('scroll', function(){
    var sct = $(this).scrollTop()
    if (sct>=50 && !$('#header').hasClass('on')) {
        $('#header').addClass('on')
    } else if (sct<50 && $('#header').hasClass('on')) {
        $('#header').removeClass('on')
    }
})




// //최초에 화면 사이즈를 출력
// if (ww>1024) {
//     $('html').addClass('pc').removeClass('mobile')
// } else {
//     $('html').addClass('mobile').removeClass('pc')
// }

// //리사이즈 시 화면 사이즈를 출력
// $(window).on('resize', function(){
//     var ww = $(this).width()
//     if (ww>1024) {
//         $('html').addClass('pc').removeClass('mobile')
//     } else {
//         $('html').addClass('mobile').removeClass('pc')
//     }
// })

// // 1024기준 - 이전 코딩(한번만 작동)
// var ww = $(window).width()
// // console.log(ww)
// if(ww>1024) {
//     $('#header #nav .depth3 > li').hover(
//         function(){
//             $(this).addClass('on')
//         },
//         function(){
//             $(this).removeClass('on')
//         }
//     )
// } else {
//     $('#header #nav .depth3 > li').on('click', function(e){
//         e.preventDefault()
//         $(this).toggleClass('on')
//         $(this).siblings().removeClass('on')
//     })
// }
// $('.depth4 > li').on('click',function(e){
//     e.stopPropagation()
//     // console.log(e.target)
// })

// What we do에서 클릭 시 배경이미지 모달창으로 띄우기
$('.article2 ul li').on('click', function(){
    var bgimg = $(this).css('backgroundImage')
    var newbgimg = bgimg.replace('url(.','')
    var src = newbgimg.replace(')','')
    $('body').append('<div class="outbox"><div class="inbox"></div></div>')
    $('.outbox').css({
        position: 'fixed',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        background: 'rgba(0,0,0,0.8)'
    })
    $('.inbox').css({
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        background: 'rgba(0,0,0,0.8)'
    })
    $('.inbox').append(`<img src="${src}" alt="">`)
})