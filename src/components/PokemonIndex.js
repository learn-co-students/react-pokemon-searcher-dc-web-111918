import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

const URL = "http://localhost:3000/pokemon"
class PokemonPage extends React.Component {
  constructor(){
    super()
    this.state={
      allPokemon: [],
      searchTerm: ""
    }
  }
  componentDidMount(){
    fetch(URL)
    .then(res=>res.json())
    .then(data=>{
      this.setState({
        allPokemon: data
      })
    })
  }
  handleChange=(e,{value})=>{
    this.setState({
      searchTerm: value
    })
  }

  postPokemon=(pokemonInfo)=>{
    let {name,hp,frontUrl,backUrl} = pokemonInfo
    fetch(URL,{
      method: "POST",
      headers:{
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name:name,
        stats: [
          {
          value: hp,
          name: "hp"
          }
        ],
        sprites: {
          front: frontUrl,
          back: backUrl
        }
      })
    })
    .then(res=>res.json())
    .then(newPokemon=>{
      this.setState({
        allPokemon: [...this.state.allPokemon,newPokemon]
      })
    })
}

  render() {
    let filteredArray = this.state.allPokemon.filter(pokemon=>pokemon.name.includes(this.state.searchTerm))
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={_.debounce(this.handleChange, 500)} showNoResults={false}/>
        <br />
        <PokemonCollection renderPokemon={filteredArray}/>
        <br />
        <PokemonForm postPokemon={this.postPokemon}/>
      </div>
    )
  }
}

export default PokemonPage
