import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {
  constructor(){
    super()
    this.state = {
      pokeData: [],
      pokeListToPrint: []
    }
  }

  componentDidMount(){
    this.fetchPokemon()
  }

  fetchPokemon(){
    fetch('http://localhost:3000/pokemon')
    .then(res => res.json())
    .then(pokeData => {
      this.setState({
        pokeData: pokeData,
        pokeListToPrint: pokeData
      })
    })
  }

  postNewPokemon(data){
    console.log("posting new pokemon")
    console.log(data)

    fetch('http://localhost:3000/pokemon',
    {
      method: "POST",
      headers:
        {
          "content-type":"application/json",
          accept: "application/json"
        },
      body: JSON.stringify(data)
    }
  )
    .then(res => res.json())
    .then(newPokeData => {
    })
    this.setState({
      pokeListToPrint: [...this.state.pokeData, data]
    })

  }

  handleSearch = (event) => {
    console.log("in handle search")
    console.log(event.target.value)

    let newPokeArray = this.state.pokeData.filter(pokemon => (pokemon.name.includes(event.target.value)))
    this.setState({
      pokeListToPrint: newPokeArray
    })
  }

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={this.handleSearch} showNoResults={false} />
        <br />
        <PokemonCollection pokeData={this.state.pokeListToPrint}/>
        <br />
        <PokemonForm postNewPokemon={this.postNewPokemon} />
      </div>
    )
  }
}

export default PokemonPage

// <Search onSearchChange={_.debounce(() => console.log("foo"), 500)} showNoResults={false} />
