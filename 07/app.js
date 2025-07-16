console.log('DOM');

const buttonSettings = {
    attr: {
        className: 'btn',
        title: 'super button'
    },
    css: {
        border: '1px solid #336699',
        padding: '5px 20px',
        color: '#444'
    },
    text: 'Click me!',
}

const newButton = document.createElement('button');

for (const key in buttonSettings.attr) {
    newButton[key] = buttonSettings.attr[key]
};

for (const secKey in buttonSettings.css) {
    newButton.style[secKey] = buttonSettings.css[secKey]
};

newButton.innerText = buttonSettings.text;

document.body.appendChild(newButton);
