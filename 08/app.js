console.log('DOM');

const form = document.querySelector('form');

form.setAttribute('novalidate', true);

form.addEventListener('submit', function (e) {

    const nameInfo = document.getElementsByName('firstName')[0].value;
    const lastNameInfo = document.getElementsByName('lastName')[0].value;
    const streetInfo = document.getElementsByName('street')[0].value;
    const houseNumberInfo = document.getElementsByName('houseNumber')[0].value;
    const flatNumberInfo = document.getElementsByName('flatNumber')[0].value;
    const zipInfo = document.getElementsByName('zip')[0].value;
    const cityInfo = document.getElementsByName('city')[0].value;
    const regionInfo = document.getElementsByName('voivodeship')[0].value;

    const errorElement = document.querySelector('.messages');

    const errors = [];

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

    if (flatNumberInfo === '') {
        errors.push('puste pole numeru ulicy')
    };

    if (isNaN(flatNumberInfo)) {
        errors.push('podany numer ulicy nie jest liczbą')
    };

    if (cityInfo === '') {
        errors.push('puste pole nazwy miasta')
    };

    if (regionInfo === '') {
        errors.push('puste pole nazwy województwa')
    };

    const errorList = function (err) {
        const liElement = document.createElement('li');
        liElement.innerText = err;
        errorElement.appendChild(liElement);
    }

    if (errors.length > 0) {
        e.preventDefault();
        errors.forEach(errorList);
        alert('Podane dane są nieprawidłowe')
    } else {
        alert("podane dane są prawidłowe")
    }
})