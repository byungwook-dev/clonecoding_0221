function checkEmail() {
  var email = document.getElementById("two").value;
  var passwordInput = document.getElementById("four");
  var passwordErrorDiv = document.getElementById("no");
  var emailErrorDiv = document.getElementById("plz");
      
//이메일 형식 검사 정규식
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      
//이메일이 비어있지 않고 올바른 형식인 경우
  if (email && emailPattern.test(email)) {
    passwordInput.disabled = false; //비밀번호 입력란 활성화
    passwordErrorDiv.style.display = "none"; //오류 메시지 숨기기
    document.getElementById("two").style.outline = "1px solid #00c4c4"; // 초기 포커스 색상으로 변경
    document.getElementById("two").style.boxShadow = "rgba(17, 17, 26, 0.1) 0px 0px 16px"; // 초기 포커스 색상으로 변경
  } else {
    passwordInput.disabled = true; //비밀번호 입력란 비활성화
    passwordErrorDiv.style.display = "none"; //오류 메시지 숨기기
    document.getElementById("two").style.outline = "1px solid #fa5963"; // 오류 발생 시 색상 변경
    document.getElementById("two").style.boxShadow = "rgba(17, 17, 26, 0.1) 0px 0px 16px"; // 오류 발생 시 색상 변경
  }

//이메일 형식 검사
  if (!emailPattern.test(email)) {
    emailErrorDiv.style.display = "block";
  } else {
    emailErrorDiv.style.display = "none";
  }
}
      
function checkPassword() {
  var password = document.getElementById("four").value;
  var passwordErrorDiv = document.getElementById("no");
    
//비밀번호가 비어 있는지 확인
  if (password.trim() === "") {
    passwordErrorDiv.style.display = "block";
    document.getElementById("four").style.outline = "1px solid #fa5963"; // 오류 발생 시 색상 변경
    document.getElementById("four").style.boxShadow = "rgba(17, 17, 26, 0.1) 0px 0px 16px"; // 오류 발생 시 색상 변경
    return false;
  } 
  else {
    passwordErrorDiv.style.display = "none";
    document.getElementById("four").style.outline = "1px solid #00c4c4"; // 초기 포커스 색상으로 변경
    document.getElementById("four").style.boxShadow = "rgba(17, 17, 26, 0.1) 0px 0px 16px"; // 초기 포커스 색상으로 변경
  }

//비밀번호가 영문자와 숫자의 조합이며 8자리 이상인지 확인
var passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  if (!passwordPattern.test(password)) {
    passwordErrorDiv.style.display = "block";
    document.getElementById("four").style.outline = "1px solid #fa5963"; // 오류 발생 시 색상 변경
    document.getElementById("four").style.boxShadow = "rgba(17, 17, 26, 0.1) 0px 0px 16px"; // 오류 발생 시 색상 변경
  } else {
    passwordErrorDiv.style.display = "none";
    document.getElementById("four").style.outline = "1px solid #00c4c4"; // 초기 포커스 색상으로 변경
    document.getElementById("four").style.boxShadow = "rgba(17, 17, 26, 0.1) 0px 0px 16px"; // 초기 포커스 색상으로 변경
  }
}

function resetStyles(element) {
      element.style.outline = "1px solid #00c4c4";
      element.style.boxShadow = "rgba(17, 17, 26, 0.1) 0px 0px 16px";
  }

function validateForm() {
//이메일 입력란 값 가져오기
  var email = document.getElementById("two").value;
//이메일 형식 검사 정규식
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  var emailErrorDiv = document.getElementById("plz");
          
//이메일 형식 검사
  if (!emailPattern.test(email)) {
    emailErrorDiv.style.display = "block";
    return false;
  } else {
    emailErrorDiv.style.display = "none";
  }
      
//비밀번호 입력란 값 가져오기
  var password = document.getElementById("four").value;
  var passwordErrorDiv = document.getElementById("no");
          
//비밀번호가 비어 있는지 확인
  if (password.trim() === "") {
    passwordErrorDiv.style.display = "block";
    return false;
  } else {
    passwordErrorDiv.style.display = "none";
  }

//비밀번호가 영문자와 숫자의 조합이며 8자리 이상인지 확인
  var passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  if (!passwordPattern.test(password)) {
    passwordErrorDiv.style.display = "block";
    return false;
  } else {
    passwordErrorDiv.style.display = "none";
  }      

  window.location.href = "http://127.0.0.1:5500/clone/wanted.html";
  return true;
}
