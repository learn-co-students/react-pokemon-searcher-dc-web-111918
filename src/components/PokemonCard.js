import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state = {
    front: true
  }

  pokemonHp(pokemonStatsArr) {
    let hpValue;
    pokemonStatsArr.forEach(statObj => {
      if (statObj.name === 'hp') {
        hpValue = statObj.value
      }
    })
    return hpValue
  }

  handleCardClick = () => {
    this.setState({
      front: !(this.state.front)
    })
  }

  render() {
    return (
      <Card onClick={this.handleCardClick}>
        <div>
          <div className="image">
          {this.state.front ?
            <img alt="front" src={this.props.pokemon.sprites.front}/>
          :
            <img alt="back" src={this.props.pokemon.sprites.back}/>
          }
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
               {this.pokemonHp(this.props.pokemon.stats)} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
