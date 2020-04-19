window.addEventListener('DOMContentLoaded', ()=> {
    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся!',
        failure: 'Что-то пошло не так...'
    };
    
    let form = document.querySelector('.main-form'),
        input = form.getElementsByTagName('input');
    
        form.addEventListener('submit', function(event) {
        event.preventDefault();
    
        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    
        let formData = new FormData(form);
    
        let obj = {};
        formData.forEach(function(value, key) {
            obj[key] = value;
        });
        let json = JSON.stringify(obj);
    
        request.send(json);
    
        for (let i = 0; i < input.length; i++) {
            input[i].value = '';
        }
    });

    let slideIndex = 1,
        slides = document.querySelectorAll('.slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next');

    showSlide(slideIndex);
    function showSlide(n) {

        if(n > slides.length) {
            slideIndex = 1;
        }
        if(n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach((item) => item.style.display = 'none');

        slides[slideIndex - 1].style.display = 'block';
    }
    function plusSlides(n) {
        showSlide(slideIndex += n);
    }
    function currentSlides(n) {
        showSlide(slideIndex = n);
    }

    prev.addEventListener('click', ()=>{
        plusSlides(-1);
    });
    next.addEventListener('click', ()=>{
        plusSlides(1);
    });
    
});