console.log('DOM');

const dataElements = document.querySelectorAll('[data-url]');
console.log(dataElements);

const innerLinks = [];

dataElements.forEach(element => {
    const attributes = element.getAttribute('data-url');
    innerLinks.push(attributes);
});

const linkElements = document.querySelectorAll('a');

linkElements.forEach((link, index) => {
    if (innerLinks[index]) {
        link.setAttribute('href', innerLinks[index])
    }
});