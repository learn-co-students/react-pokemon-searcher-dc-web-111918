import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  render(props) {
    return (
      <Card.Group itemsPerRow={6}>
        <h1>Hello From Pokemon Collection</h1>
        {this.props.renderPokemon.map((pokemon,index)=>
          <PokemonCard pokemonInfo={pokemon} key={index}/>
        )}
      </Card.Group>
    )
  }
}

export default PokemonCollection
