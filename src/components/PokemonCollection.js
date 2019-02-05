import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  filteredPokemon = () => {
    if(this.props.filter === ""){
      return this.props.pokemon
    } else {
        return this.props.pokemon.filter(pokemon => pokemon.name.includes(this.props.filter))
    }
  }

  render() {
    return (
      <Card.Group itemsPerRow={6}>
        {this.filteredPokemon().map(pokemonObj => 
        <PokemonCard 
          pokemon = {pokemonObj}
          key = {pokemonObj.id}
          allPokemon = {this.props.pokemon}
        />
        )}
      </Card.Group>
    )
  }
}

export default PokemonCollection
