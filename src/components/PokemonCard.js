import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  constructor(){
    super()
    this.state = {
      showFront: true
    }
  }

  // getImageId(){
  //   let pokemonNamesArr = this.props.allPokemon.map(pokemon => pokemon.name)
  //   let index = pokemonNamesArr.findIndex(name => name === this.props.pokemon.name)
  //   return(this.props.pokemon.id === index+1)
  //   return index+2
  // }

  handleClick = () => {
    this.setState({
      showFront: !this.state.showFront
    })
    // console.log('clicking card', this.props.pokemon.name)
  }

  showFront = () => {
    return (this.state.showFront ? null : "back")
  }


  render() {
    return (
      <Card onClick={this.handleClick}>
        <div>
          <div className="image">
            <img
              src={this.state.showFront ? 
                this.props.pokemon.sprites.front
                :
                this.props.pokemon.sprites.back
                }
              alt="oh no!" 
              />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.stats[5].value} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
