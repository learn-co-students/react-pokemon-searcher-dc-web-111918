import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'
import { get } from 'http';

class PokemonPage extends React.Component {

  constructor(){
    super()
    this.state = {
      allPokemon: [],
      searchTerm: ""
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/pokemon')
    .then(r => r.json())
    .then(pokemon => this.setState({
      allPokemon: pokemon
    }))
  }

  addPokemon = (newPokemon) => {
    this.setState({
      allPokemon: [newPokemon,...this.state.allPokemon]
    })
  }

  handleSearchBar = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
    // console.log(e.target.value)
  }

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={this.handleSearchBar} showNoResults={false} />
        <br />
        <PokemonCollection 
          pokemon={this.state.allPokemon} 
          filter={this.state.searchTerm}
          />
        <br />
        <PokemonForm 
          addPokemon = {this.addPokemon}
        />
      </div>
    )
  }
}

export default PokemonPage
