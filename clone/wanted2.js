// 슬라이드 이미지 감싸고 있는 부모요소
// let $slider = $(".tag_card_ctn");

// 슬라이드 이미지
// let $images = $(".card_thumb");

// 슬라이드 이미지 너비
// 360px;

let slide = 0;

// 왼쪽 이동 버튼
$(".cruz_nav_lt").on("click", function(){
    if(slide==5){
        $(".tag_card_ctn").css("transform", "translateX(360px)");
        slide = 4;
    }else if(slide==4){
        $(".tag_card_ctn").css("transform", "translateX(360px)");
        slide = 3;
    }else if(slide==3){
        $(".tag_card_ctn").css("transform", "translateX(360px)");
        slide = 2;
    }else if(slide==2){
        $(".tag_card_ctn").css("transform", "translateX(360px)");
        slide = 1;
    }else if(slide==1){
        $(".tag_card_ctn").css("transform", "translateX(360px)");
        slide = 0;
    }
});

// 오른쪽 이동 버튼
$(".cruz_nav_rt").on("click", function(){
    if(slide==0){
        $(".tag_card_ctn").css("transform", "translateX(-360px)");
        slide = 1;
    }else if(slide==1){
        $(".tag_card_ctn").css("transform", "translateX(-720px)");
        slide = 2;
    }else if(slide==2){
        $(".tag_card_ctn").css("transform", "translateX(-1080px)");
        slide = 3;
    }else if(slide==3){
        $(".tag_card_ctn").css("transform", "translateX(-1440px)");
        slide = 4;
    }else if(slide==4){
        $(".tag_card_ctn").css("transform", "translateX(-1800px)");
        slide = 5;
    }
});

