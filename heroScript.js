document.addEventListener('DOMContentLoaded', function() {
    var animation = lottie.loadAnimation({
        container: document.getElementById('lottie'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'https://brisbanewebsitedesign.au/wp-content/uploads/2024/10/laptoppurple2.json'
    });
    var lottieElement = document.getElementById('lottie');
    lottieElement.addEventListener('mouseover', function() {
            animation.setSpeed(4);
            speed = 4;
    });
        lottieElement.addEventListener('mouseout', function() {
        animation.setSpeed(1)
    });
    let count = 0;
    lottieElement.addEventListener('click', function(e) {
        count++
        if (count > 2) {
            count = 1;
        }
        if (count === 1) {
            animation.setDirection(-1);
        }
        else if (count === 2) {
            animation.setDirection(1);
        }
    });
});