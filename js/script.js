const content = document.querySelector('.content');
const btn = document.querySelector('.btn');
const character = document.querySelector('#character')
const imgs = document.querySelector('.imgs')

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

desc.classList.add('desc');




const fetchApi = async (page) => {
    let url = `https://rickandmortyapi.com/api/character/?page=${page}`;
    
    const api= await fetch(url);
    const dados = await api.json();
    content.innerHTML = ""

    dados.results.map(item => {
        content.innerHTML += `
            <div class="card">
                    <div class="image">
                        <img src="${item.image}" class="imgs" alt="">
                    </div>
                    <div class="info">
                        <div class="person">
                            <h4>${item.name}</h4>
                            <div class="status">${item.status}</div>
                        </div>
                        <div class="desc">
                        ${item.species}
                        </div>
                    </div>
                </div>
        `

        console.log(dados)
    })
   
    

}

fetchApi(1);

btn.addEventListener('click', async (event) => {
    
    
});