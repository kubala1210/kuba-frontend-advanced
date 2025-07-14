console.log('DOM');

const newElement = document.querySelector('.comments__item.comments__item--newest');

if (newElement) {
    const dataElements = newElement.querySelectorAll('[data-info]');
    console.log(dataElements.length);
}