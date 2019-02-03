import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

const baseUrl = 'http://localhost:3000/pokemon'

class PokemonPage extends React.Component {
  constructor(){
    super()
    this.state = {
      allPokemon: [],
      searchQuery: ""
    }
  }

  componentDidMount(){
    fetch(baseUrl)
    .then(res => res.json())
    .then(pokemonData => {
      this.setState({allPokemon: pokemonData})
    })
  }

  onSearchChange = (e, {value}) => {
    console.log('searching...')
    this.setState({searchQuery: value})
  }

  addPokemon = (pokemonObj) => { 
    debugger
    const data = {
      name: pokemonObj.name,
      stats: [{value: pokemonObj.hp, name: 'hp'}],
      sprites: {front: pokemonObj.frontUrl, back: pokemonObj.backUrl}
    }
    fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(newPokemon => {
      this.setState({allPokemon: [...this.state.allPokemon, newPokemon]})
    })
  }

  render() {
    const filteredPokemon = this.state.allPokemon.filter(pokemon => pokemon.name.includes(this.state.searchQuery))
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search 
          onSearchChange={_.debounce(this.onSearchChange, 500)} 
          showNoResults={false} 
        />
        <br />
        <PokemonCollection 
          pokemonArray={filteredPokemon} 
        />
        <br />
        <PokemonForm addPokemon={this.addPokemon}/>
      </div>
    )
  }
}

export default PokemonPage
