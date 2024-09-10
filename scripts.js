// 로그인 버튼 클릭 시 login.html로 이동
document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.getElementById('login-btn');

    loginButton.addEventListener('click', function() {
        window.location.href = 'login.html';
    });
});
