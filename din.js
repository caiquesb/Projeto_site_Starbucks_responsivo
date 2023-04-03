let img_que_tenho = document.querySelector('.img_grande')
let cor_que_tenho = document.querySelector('.extras');
let sign_in = document.querySelector('.navbar__item_sign_in');

const teste = document.querySelector('.threeeline-icon');
const nav_menu = document.querySelector('.menu');

function imgSlider(img_que_quero){
    img_que_tenho.src = img_que_quero;
}

function changeCircleColor(cor_que_quero){
    cor_que_tenho.style.background = cor_que_quero;
}

function sigInColor(nova_tonalidade){
    sign_in.style.backgroundColor = nova_tonalidade;
}

teste.addEventListener("click", () => {
        teste.classList.toggle('active');
        nav_menu.classList.toggle('active');
})

