import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  constructor(){
    super()
    this.state = {
      frontImage: true
    }
  }

  clickHandler = () => {
    console.log("in click handler")
    let foo = this.props.pokeData
    this.setState({
      frontImage: !this.state.frontImage
    })
  }

  render() {
    const hp = this.props.pokeData.stats.find(stat => stat.name === "hp").value
    return (
      <Card>
        <div key={this.props.pokeData.id}>
          <div className="image">
            <img alt="oh no!" src={!this.state.frontImage ? this.props.pokeData.sprites.back : this.props.pokeData.sprites.front} onClick={this.clickHandler} />
          </div>
          <div className="content">
            <div className="header">{this.props.pokeData.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
