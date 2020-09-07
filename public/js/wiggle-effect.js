
const button = document.querySelector('.home article a button');
let buttonClick;

window.onload = () => {
    for (let i = 1; i < 99; i++) {
        button.addEventListener('click', event => {
            buttonClick = 99;
        })
        setTimeout(() => { 
            if(buttonClick!==99) {
                classUpdate()
            }
        }, i * 17500);
    }
}

classUpdate = () => {
    button.className = 'wiggle-animation'
    setTimeout(() => {
        button.classList.remove('wiggle-animation')
    }, 1000);
}