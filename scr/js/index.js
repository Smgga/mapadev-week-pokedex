const listaPokemon = document.querySelectorAll(".pokemon")
const cartaoPokemon = document.querySelectorAll(".cartao-pokemon")

listaPokemon.forEach(pokemon => {
    pokemon.addEventListener("click", () => {
        const cartaoAberto = document.querySelector(".aberto")
        const iconAtivo = document.querySelector(".ativo")
        const idPokemon = pokemon.attributes.id.value
        const idCartao = document.getElementById("cartao-"+idPokemon)
       
        cartaoAberto.classList.remove("aberto")
        idCartao.classList.add("aberto")

        iconAtivo.classList.remove("ativo")
        pokemon.classList.add("ativo")
    })
})