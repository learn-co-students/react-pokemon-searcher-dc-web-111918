import React from 'react'
import { Card } from 'semantic-ui-react'
import { isUndefined } from 'util';

class PokemonCard extends React.Component {

  state = {
    click: false
  }

  handleCardClick = () =>{
    this.setState({
      click: !this.state.click
    })
  }

  render() {
    let pokemonHP = this.props.pokemonObj.stats.find(stat => stat.name === "hp").value
    return (
      <Card>
        <div onClick={this.handleCardClick}>
          <div className="image">
            <img src={this.state.click ? this.props.pokemonObj.sprites.back :
              this.props.pokemonObj.sprites.front} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemonObj.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {pokemonHP}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
