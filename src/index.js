import example from "./js/modle";

console.log(example(4));
console.log(example(4, 5));


function highlightMenuItem(x) {
    if (x.matches) { // If media query matches
        let menu = document.querySelector('.menu');
        menu.addEventListener('click',function (event) {
            let target = event.target;
            let elderSelect = document.querySelector('.selectItem');
            if(elderSelect){
                elderSelect.classList.remove('selectItem');
            }
            target.classList.add('selectItem');
        });
    }
}

let x = window.matchMedia("(max-width: 480px)");
highlightMenuItem(x);
x.addListener(highlightMenuItem);


// import './scss/reset.scss'
// import './css/font.css'
// import './scss/index.scss'
