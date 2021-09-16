const boxes = document.querySelectorAll('.box');


window.addEventListener('scroll', () => {
    triggerPoint = window.innerHeight / 5 * 4;
    
    console.warn('triggerPoint: ' + triggerPoint);
    boxes.forEach((box, index) => {
        const boxTop = box.getBoundingClientRect().top;
        console.log(`this is box ${index}: ${boxTop}`);
        if (boxTop < triggerPoint) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    })
})