const content = document.querySelector('.content');
const search = document.querySelector('.nameSearch')
const more = document.querySelector('.more')

const sFilter =document.querySelector('#species');
const filterS =document.querySelector('#status');

let api = `https://rickandmortyapi.com/api/character/`;

const filter = {
    name: '',
    species: '',
    status: '',
    page: 1,
}


const fetchApi = async ({name, species, status, page = 1}) => {
    const res = await fetch(`${api}?name=${name}&species=${species}&status=${status}&page=${page}`);

    const cardCharacters = await res.json();

    return cardCharacters.results
}



//Renderização das cards

const cards = async ({ cardCharacters }) => {
   
    cardCharacters.forEach((item) => {
    
        return content.innerHTML += `
            <div class="card">
            <div class="image">
                <div class="id">#${item.id}</div>
                <img src="${item.image}" class="imgs" alt="${item.name}">
            </div>
            <div class="info">
                <div class="person">
                    <h4>${item.name}</h4>
                    <div class="status">${item.status}</div>
                </div>
                <div class="desc">
                    ${item.species}<br>
                </div>
            </div>
            </div>
        `
    });
}
//Filtro de species
sFilter.addEventListener('change', async (event) => {
    filter.species = event.target.value;
    content.innerHTML = '';
    const cardCharacters = await fetchApi(filter)
    cards({cardCharacters})
})

//Filtro de Status
filterS.addEventListener('change', async (event) => {
    filter.status = event.target.value;
    content.innerHTML = ''
    const cardCharacters = await fetchApi(filter)
    cards({cardCharacters})
})

//Botão de carregar mais
async function handleMore(){
    filter.page += 1;
    const cardCharacters = await fetchApi(filter)
    cards({cardCharacters})
}

more.addEventListener('click', handleMore)


//Campo de busca
function page ({page}) {
    divRes = document.querySelector('#resultado')
    divRes.innerHTML = ""
}

//Numero de páginas
async function main() {
    const cardCharacters = await fetchApi(filter);
    cards({cardCharacters})
}



main()

/*
<div class="card">
        <div class="image">
            <div class="id">#${item.id}</div>
            <img src="${item.image}" class="imgs" alt="${item.name}">
        </div>
        <div class="info">
            <div class="person">
                <h4>${item.name}</h4>
                <div class="status">${item.status}</div>
            </div>
            <div class="desc">
                ${item.species}<br>
            </div>
        </div>
    </div>
*/