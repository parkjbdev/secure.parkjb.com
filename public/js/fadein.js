const elements = document.getElementsByClassName('fadein')

function init() {
    for(let i = 0; i < elements.length; i++)
        elements.item(i).style.visibility = 'hidden';
}

function fadeIn(element, time) {
    element.style.opacity = '0';
    element.style.visibility = 'visible';

    let last = +new Date();
    const tick = function() {
        element.style.opacity = +element.style.opacity + (new Date() - last) / time;
        last = +new Date();

        if (+element.style.opacity < 1) {
            (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
        }
    };

    tick();
}
function fadeInElements(elements, time) {
    for(let i = 0;i < elements.length;i++)
        fadeIn(elements.item(i), time);
}

init()

window.onload = function () {
    fadeInElements(elements, 1100)
}