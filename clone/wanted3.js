// 모달-팝업
let showMe = document.querySelector(".showme");
let showCtn = document.querySelector(".show_ctn");
let btnBack = document.querySelector(".btn_back");

showMe.addEventListener("click", function(){
    showCtn.style.display = "flex";
});

btnBack.addEventListener("click", function(){
    showCtn.style.display = "none";
});

