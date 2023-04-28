const content = document.querySelector('.content');
const btn = document.querySelector('btn');

let card = document.createElement('div');
let image = document.createElement('div');
let img = document.createElement('img');
let info = document.createElement('div');
let person = document.createElement('div');
let names = document.createElement('h4');
let statusCharacter = document.createElement('div');
let desc = document.createElement('div');

card.classList.add('card');
image.classList.add('image');
info.classList.add('info');
person.classList.add('person');
statusCharacter.classList.add('status');
desc.classList.add('desc');

content.appendChild(card);
card.appendChild(image);
image.appendChild(img);
//SRC DA IMAGEM
card.appendChild(info);
info.appendChild(person);
person.appendChild(names);
person.appendChild(statusCharacter);
info.appendChild(desc);

const fetchApi = (value) => {

}

btn.addEventListener('click', () => {

});