// 로그인 및 회원가입 버튼 클릭 시 해당 페이지로 이동
document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.getElementById('login-btn');
    const signupButton = document.getElementById('signup-btn'); 

    loginButton.addEventListener('click', function() {
        window.location.href = 'login.html';
    });

    signupButton.addEventListener('click', function() {
        window.location.href = 'signup.html';
    });

    // 쇼핑 섹션 슬라이더 기능
    const containerShopping = document.querySelector('.container-shopping');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    prevBtn.addEventListener('click', function() {
        containerShopping.scrollBy({
            left: -200, // 왼쪽으로 스크롤
            behavior: 'smooth'
        });
    });

    nextBtn.addEventListener('click', function() {
        containerShopping.scrollBy({
            left: 200, // 오른쪽으로 스크롤
            behavior: 'smooth'
        });
    });
});
