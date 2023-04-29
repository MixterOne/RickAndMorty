const content = document.querySelector('.content');
const btn = document.querySelector('.btn');

const imgs = document.querySelector('.imgs')



let urlapi = `https://rickandmortyapi.com/api/character/`


const fetchApi = async (url, name = '', page = 1) => {
    if(name !== ''){
        var res = await fetch(`${url}?name=${name}`);
    } else if (page !== 1){
        var res = await fetch(`${url}?page=${page}`);
    } else {
        var res = await fetch(url);
    }
    const dados = await res.json();

    const characters = dados.results;
    cards(characters);

    
}

//Renderização das cards

const cards = (characters) => {
    content.innerHTML = ''
    characters.map((item) => {
        content.insertAdjacentHTML('beforeend', `
        <div class="card">
        <div class="image">
            <img src="${item.image}" class="imgs" alt="${item.name}">
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

        `)
    })
}

//Campo de busca

const search = (event) => {
    event.preventDefault()
    const name = document.querySelector('#character').value
    fetchApi(urlapi, name)
}

//Numero de paginas
const page = (event) => {
    event.preventDefault()
    const page = document.querySelector('#page').value
    console.log(page)
    fetchApi(urlapi, page)
}




fetchApi(urlapi);

/*

*/ 