console.log('DOM');

const buttonList = document.querySelectorAll('button');
let counter = 0;

const afterClick = function (event) {
    event.target.innerText = 'clicked';
    ++counter;
    if (counter === 1) {
        event.target.removeEventListener('click', afterClick)
    }
    console.log('clicked');
};

buttonList.forEach(function (button) {
    button.addEventListener('click', afterClick)
});