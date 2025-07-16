console.log('DOM');

const buttonElement = document.querySelector('button');

if (buttonElement) {
    buttonElement.addEventListener('click', displayInfo)
};

function displayInfo() {
    console.log('clicked')
};