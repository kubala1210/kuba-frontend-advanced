console.log('DOM');

const buttonList = document.querySelectorAll('button');

const afterClick = function (event) {
    event.target.innerText = 'clicked';
    event.target.removeEventListener('click', afterClick)
    console.log('clicked');
};

buttonList.forEach(function (button) {
    button.addEventListener('click', afterClick)
});


// counter = counter + 1

// const bodyEl = document.querySelector('body');

// console.log(bodyEl)

// bodyEl.addEventListener('click', function (event) {
//     console.log(event.target, event.currentTarget)
// })