// codigo que eu coipiei para nao ficar ativando a funct de scroll toda hr 

const debounce = function(func, wait, immediate) {
    let timeout;
    return function(...args) {
        const context = this;
        const later = function() {
            timeout = null;
            if(!immediate) func.apply(context, args)
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if(callNow) func.apply(context, args);
    };
};



const secoes = document.querySelectorAll('[data-anime]')
const classe_animcacao = 'animate'

function animeScroll() {
    // window.innerHeight pega a altura da tela 
    const windowTop = window.pageYOffset + ((window,innerHeight * 3)/ 4) // saber o valor do eixo y da barra da tela colocamos os 600 para ficar maior  e usei essa formula para ficar melhor em outros monitores
    secoes.forEach(function(element){ // se o window top for maior que o elemento do anime ele adiciona a classe de animacao
        if((windowTop) > element.offsetTop) {
            element.classList.add(classe_animcacao)
        } else {
            element.classList.remove(classe_animcacao) // se for falso ele vai remover e na hora que descer dnv ele faz a animacao
        }

        // console.log(element.offsetTop) // saber a distancia que o elemento esta do topo
    })
}

animeScroll() // isso garante que a animacao sempre seja ativada

// se tuver secoes ele roda o codigo se nao tiver ele nao roda 
if(secoes.length) {
    // window é a tela geral 
    window.addEventListener('scroll', debounce(function(){
        animeScroll()
    }), 200)
    console.log('ativado')
}
