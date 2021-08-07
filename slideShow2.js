'use strict';
// let imagens = document.querySelectorAll('.imagens'); declarar dentro de procuraBolinha

// DESAFIO: COLOCAR AS BOLINHAS ABAIXO DO CONTAINER-ITEMS PARA IR MARCANDO O ROLAMENTO DAS IMAGENS.

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< CARREGA IMAGENS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const images = [
    { 'id': '1', 'url':'./img/chrono.jpg' },
    { 'id': '2', 'url':'./img/inuyasha.jpg' },
    { 'id': '3', 'url':'./img/tenchi.jpg' },
    { 'id': '4', 'url':'./img/tenjhotenge.jpg' },
    { 'id': '5', 'url':'./img/yuyuhakusho.jpg' },
    { 'id': '6', 'url':'./img/ippo.png' },
]

const containerItems = document.querySelector('#container-items');
// const container = document.getElementById('container-items');

const loadImages = function (images, container) {
    images.forEach(image => {
        // Observe o operador (+=) para que ele acumule os conteúdos (image) e não substitua (caso colocássemos só ()=) )
        container.innerHTML += `
            <div class='item'>
                <img class='imagem' src='${image.url}'
            </div>
        `
    });
}


loadImages (images, containerItems);


// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< PASSA IMAGENS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

let items = document.querySelectorAll('.item');
// Se colocar antes de loadImagens, não funciona, pois ainda não terá lido as imagens para jogar no array 'items'.

function next () {
    containerItems.appendChild(items[0]);
    // appendChild pega insere o elemento na última posição do array. Assim, o elemento 0 vai para a última posição.
    items = document.querySelectorAll('.item');
    /*  Precisamos atualizar o array de items para quando chamarmos novamente a função 'previous', ela continuar
    girando as imagens de onde parou. */
    marcaBolinha();
}

function previous () {
    let lastItem = items[items.length - 1];
    containerItems.insertBefore(lastItem, items[0]);
    items = document.querySelectorAll('.item');
    marcaBolinha();
}

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< MARCA BOLINHA >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Pegar todas as <div class='item'> <img class='imagem' src='${image.url}'</div>
let imagens = document.querySelectorAll('.imagem');

// Pegar todas as <div class="bolinha" id=""></div>
const bolinhas = document.querySelectorAll('.bolinha');

let bolinha;

function achaBolinha() {

    /* Pega o valor atual de bolinha (antes de atribuir o novo valor) e deleta a classe de marcação.
    Na primeira chamada o valor de bolinha não está definido e vai dar erro se tentarmos chamar classList 
    sobre um objeto undefined. Por isso a verificação abaixo. */
    if (bolinha != undefined) {
        bolinha.classList.remove('bolinha-mark'); 
    }

    imagens = document.querySelectorAll('.imagem');
    bolinhas.forEach(element => {
        if (imagens[1].src.indexOf(element.id) > -1) {
            bolinha = element;
            return bolinha;

        }
    })
}

// Já está sendo executado dentro de achaBolinha(), para não precisar fazer o forEach toda vez sobre o array
// de bolinhas e assim otimizar o programa.
// function resetaBolinhas() {
//     bolinhas.forEach(element => {
//         element.classList.remove('bolinha-mark');
//     });
// }

function marcaBolinha() {
    // resetaBolinhas();
    achaBolinha();
    bolinha.classList.add('bolinha-mark');
}


// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< EVETLISTENERS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

document.getElementById('previous').addEventListener('click', previous);
document.getElementById('next').addEventListener('click', next);





