import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  constructor(){
    super()
    this.state={
      clicked: false
    }
  }
  handleClick=()=>{
    this.setState({
      clicked: !this.state.clicked
    })
  }
  render(props) {
    let{sprites,name,stats}=this.props.pokemonInfo
    let statsHp=stats.filter(stat=>stat.name==='hp')
    let value = statsHp.map(stat=>stat.value)
    return (
      <Card onClick={this.handleClick}>
        {!this.state.clicked?<div>
          <div className="image">
            <img alt={name} src={sprites.front}/>
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {value}hp
            </span>
          </div>
        </div>:
        <div>
          <div className="image">
            <img alt={name} src={sprites.back}/>
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <span>
            <i className="icon heartbeat red" />
            {value}hp
          </span>
          </div>
      }
      </Card>
    )
  }
}

export default PokemonCard
