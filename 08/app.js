console.log('DOM');

const formEl = document.querySelector('form');
const ulEl = document.querySelector('ul');

if (formEl) {
    formEl.addEventListener('submit', handleSubmit)
};

function handleSubmit(e) {
    e.preventDefault();
    const errors = [];

    ulEl.innerHTML = '';

    const nameInfo = document.getElementsByName('firstName')[0].value;
    const lastNameInfo = document.getElementsByName('lastName')[0].value;
    const streetInfo = document.getElementsByName('street')[0].value;
    const houseNumberInfo = document.getElementsByName('houseNumber')[0].value;
    const flatNumberInfo = document.getElementsByName('flatNumber')[0].value;
    const zipInfo = document.getElementsByName('zip')[0].value;
    const cityInfo = document.getElementsByName('city')[0].value;
    const regionInfo = document.getElementsByName('voivodeship')[0].value;

    if (nameInfo === '') {
        errors.push('Puste pole imienia')
    };

    if (lastNameInfo === '') {
        errors.push('Puste pole nazwiska')
    };

    if (streetInfo === '') {
        errors.push('Puste pole ulicy')
    };

    if (houseNumberInfo === '') {
        errors.push('puste pole numeru ulicy')
    };

    if (isNaN(houseNumberInfo)) {
        errors.push('podany numer ulicy nie jest liczbą')
    };

    if (flatNumberInfo !== '' && (isNaN(flatNumberInfo) || Number(flatNumberInfo) <= 0)) {
        errors.push('Numer mieszkania musi być liczbą większą od zera (jeśli podany)');
    };

    if (cityInfo === '') {
        errors.push('puste pole nazwy miasta')
    };

    if (regionInfo === '') {
        errors.push('puste pole nazwy województwa')
    };

    const zipRegex = /^[0-9]{2}-[0-9]{3}$/;
    if (!zipRegex.test(zipInfo)) {
        errors.push('Kod pocztowy musi mieć format 00-000.')
    };

    if (errors.length === 0) {
        alert('Formularz wypełniony poprawnie')
        Array.from(formEl.elements).forEach(function (el) {
            el.value = ''
        })
    } else {
        errors.forEach(function (text) {
            const liEl = document.createElement('li');
            liEl.innerText = text;
            ulEl.appendChild(liEl);
        });
    }
};