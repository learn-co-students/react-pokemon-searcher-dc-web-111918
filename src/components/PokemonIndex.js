import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {
  state = {
    allPokemon: [],
    searchTerm: ''
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
    .then(res => res.json())
    .then(data => {
      this.setState({
        allPokemon: data
      })
    })
  }

  handleSearch = (e, {value}) => {
    this.setState({
      searchTerm: value
    })
  }

  handleAddPokemon = (newPokemonData) => {
    // console.log(newPokemonData)
    const data = {
      name: newPokemonData.name,
      sprites: {
        front: newPokemonData.frontUrl,
        back: newPokemonData.backUrl
      },
      stats: [
        {name: "hp",
          value: newPokemonData.hp}
      ]
    }
    // console.log(data)

    fetch('http://localhost:3000/pokemon', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(newPokemon => {
      this.setState({
        allPokemon: [...this.state.allPokemon, newPokemon]
      })
    })
  }

  render() {
    let filteredPokemon = this.state.allPokemon.filter(pokemon => pokemon.name.includes(this.state.searchTerm))
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={_.debounce(this.handleSearch, 500)} showNoResults={false} />
        <br />
        <PokemonCollection pokemonArray={filteredPokemon}/>
        <br />
        <PokemonForm addPokemon={this.handleAddPokemon}/>
      </div>
    )
  }
}

export default PokemonPage
