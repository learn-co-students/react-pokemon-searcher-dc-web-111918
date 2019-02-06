import React, {Component, Fragment} from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends Component {

  render() {
    console.log(this.props)
    return (
      <Fragment>
        <h1>Hello From Pokemon Collection</h1>
        <Card.Group itemsPerRow={6}>
          {this.props.allPokemon.map(pokemon =>
            <PokemonCard
              pokemonObj={pokemon}
              key={pokemon.name}
            />
          )}
        </Card.Group>
      </Fragment>

    )
  }
}

export default PokemonCollection
