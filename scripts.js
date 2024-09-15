// 로그인 및 회원가입 버튼 클릭 시 해당 페이지로 이동
document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.getElementById('login-btn');
    const signupButton = document.getElementById('signup-btn'); // getElementById로 변경

    loginButton.addEventListener('click', function() {
        window.location.href = 'login.html';
    });

    signupButton.addEventListener('click', function() {
        window.location.href = 'signup.html';
    });
});

