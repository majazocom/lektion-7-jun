const pokemons = [{
        name: "Bulbasaur",
        id: 1,
        type: "grass"
    },
    {
        name: "Ivysaur",
        id: 2,
        type: "grass"
    },
    {
        name: "Venusaur",
        id: 3,
        type: "grass"
    },
    {
        name: "Charmander",
        id: 4,
        type: "fire"
    },
    {
        name: "Charmeleon",
        id: 5,
        type: "fire"
    },
    {
        name: "Charizard",
        id: 6,
        type: "fire"
    }
];
const list = document.querySelector('ul');

for (let pokemon of pokemons) {
    let newElement = `<li class="poke">${pokemon.name}, (${pokemon.id})</li>`;
    //beforebegin - innan target-elementet
    //afterbegin - innanför elementet, innan första barn-elementet i den
    //beforeend - innanför elementet, efter sista barnet i elementet
    //efterend - utanför elementet
    list.insertAdjacentHTML("beforeend", newElement);
}

let pokemonElements = document.querySelectorAll('.poke');
console.log(pokemonElements);

for (let pokemonElement of pokemonElements) {
    console.log(pokemonElement)
}