console.log('DOM');

const dataElements = document.querySelectorAll('[data-url]');
console.log(dataElements);

const innerLinks = [];

dataElements.forEach(element => {
    const url = element.getAttribute('data-url');
    innerLinks.push(url);
    element.setAttribute('href', url);
});