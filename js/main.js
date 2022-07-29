/* MENU DE LA PAGINA*/

(function(){
    const listElements = document.querySelectorAll('.menu__item--show');
    const list = document.querySelector('.menu__links');
    const menu = document.querySelector('.menu__hamburguer');

    const addClick = () =>{
        listElements.forEach(element =>{
           element.addEventListener('click', ()=>{
             
             let subMenu = element.children[1];
             let height = 0;
             element.classList.toggle('menu__item--active');


             if(subMenu.clientHeight ===  0){
                height = subMenu.scrollHeight;
             }
             subMenu.style.height = `${height}px`;
           })
        })
    }    
   
const deleteStyleHeight = () =>{
    listElements.forEach(element=>{
        if(element.children[1].getAttribute('style')){
            element.children[1].removeAttribute('style');
            element.classList.remove('menu__item--active');
        }
    });
}

    menu.addEventListener('click', () => list.classList.toggle('menu__links--show'));


})();

/*Slider Nuestros Clientes */

let slider = document.querySelector(".clientes-contenedor")
let sliderIndividual = document.querySelectorAll(".clientes__slider")
let contador = 1;
let width = sliderIndividual[0].clientWidth;
let intervalo = 7000;

window.addEventListener('resize', function(){
    width = sliderIndividual[0].clientWidth;
})

setInterval(function(){
    slides();
},intervalo);

function slides(){
    slider.style.transform = "translate("+(-width*contador)+"px)";
    slider.style.transition = "transform .8s";
    contador++;

    if(contador == sliderIndividual.length){
        setTimeout(function(){
            slider.style.transform = "translate(0px)";
            slider.style.transition = "transform 0s";
            contador=1;
        },7000)
    }
}

/* QUESTIONS */

(function(){
    const titleQuestions = [...document.querySelectorAll('.questions__title')];
    console.log(titleQuestions)

    titleQuestions.forEach(question =>{
        question.addEventListener('click', ()=>{
            let height = 0;
            let answer = question.nextElementSibling;
            let addPadding = question.parentElement.parentElement;

            addPadding.classList.toggle('questions__padding--add');
            question.children[0].classList.toggle('questions__arrow--rotate');

            if(answer.clientHeight === 0){
                height = answer.scrollHeight;
            }

            answer.style.height = `${height}px`;
        });
    });
})();




