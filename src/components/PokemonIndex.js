import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

const URL = 'http://localhost:3000/pokemon'

class PokemonPage extends React.Component {

  state = {
    allPokemon: [],
    searchTerm: ""
  }

  componentDidMount(){
    fetch(URL)
    .then(res => res.json())
    .then(pokemonData => {
      // console.log(pokemonData)
      this.setState({
        allPokemon: pokemonData
      })
    })
  }

  handleSearch = (e, {value}) => { 
    //event: {value: "what's typed", stuff2: "morestuff"}
    // console.log(e)
    // debugger
    // e.persist()
    this.setState({
      searchTerm: value
    })
  }

  addNewPokemon = (pokemon) => {
      fetch(URL, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        sprites: {
          front: pokemon.frontUrl,
          back: pokemon.backUrl
        },
        name: pokemon.name,
        stats: [{
          name: 'hp',
          value: pokemon.hp
        }]
      })
    })
      .then(res => res.json())
      .then(newPokemon => {
        this.setState({
          allPokemon: [...this.state.allPokemon, newPokemon]
        })
      })
  }


  render() {
    const searchPokemon = this.state.allPokemon.filter(pokemon => pokemon.name.startsWith(this.state.searchTerm))
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={_.debounce(this.handleSearch, 500)} showNoResults={false} />
        <br />
        <PokemonCollection 
          allPokemon={searchPokemon}
        />
        <br />
        <PokemonForm 
         addNewPokemon={this.addNewPokemon}
        />
      </div>
    )
  }
}

export default PokemonPage
