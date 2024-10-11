document.addEventListener('DOMContentLoaded', function() {
    const body = document.querySelector('body');
    const header = document.querySelector('.header-parent')
    const logo = document.querySelector('.logo img');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY === 0) {
            body.classList.add('__scroll-up')
            header.classList.add('__scroll-up')
            logo.classList.add('__scroll-up')
        }
        else if (window.scrollY > 0) {
            body.classList.add('__scroll-down')
            header.classList.add('__scroll-down')
            logo.classList.add('__scroll-down')
        };
    });
});



/*

document.addEventListener('DOMContentLoaded', function() {
    const body = document.querySelector('body');
    const header = document.querySelector('.header-parent')
    const logo = document.querySelector('.logo img');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY === 0) {
            header.style.height = '133px';
            logo.style.width = '130px';
            body.style['padding-top'] = '133px';
        }
        else {
        header.style.height = '80px';
        logo.style.width = '66px';
        body.style['padding-top'] = '80px';
        }
        
    });
});

*/