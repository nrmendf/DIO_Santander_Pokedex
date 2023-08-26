const pokemonList = document.getElementById('pokemonList');
const loadMoreButton = document.getElementById('loadMoreButton');

const maxRecords = 151;
const limit = 10
let offset = 0;






function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) => `
            <li class="pokemon ${pokemon.type}"> 
                <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>
        
                <div class="detail">
                    <ol class="types">
                        ${pokemon.type.map((type) => `<li class="type> ${type}">${type}</li>`).join('')}
                    </ol>
        
                    <img src="${pokemon.photo}" 
                        alt="${pokemon.name}">
                </div>                          
            </li>
        `).join('')

        pokemonList.innerHTML += newHtml 
    })
}

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then(pokemons = () => {
        const newHtml = pokemons.map(convertPokemonToLi).join('')
        pokemonList.innerHTML += newHtml
    })
}

function loadPokemonItens(offset, limit)

loadMoreButton.addEvent.Listener('click', () =>{
    offset += limit
    const qtdRecordNextPage = offset + limit

    if (qtdRecordNextPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, limit)

        loadMoreButton.parentElement.removeChild(loadMoreButton) 
    } else {
        loadPokemonItens(offset, limit)
    }
})