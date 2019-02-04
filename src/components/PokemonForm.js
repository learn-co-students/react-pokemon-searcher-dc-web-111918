import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }

  handleNameChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  handleHpChange = (e) => {
    this.setState({
      hp: e.target.value
    })
  }

  handleFrontUrlChange = (e) => {
    this.setState({
      frontUrl: e.target.value
    })
  }

  handleBackUrlChange = (e) => {
    this.setState({
      backUrl: e.target.value
    })
  }

  handleSubmit = () => {
    let data = {
      name: this.state.name,
      stats:[
        {},{},{},{},{},{
          value: 60,
          name: "hp"
        }
      ],
      sprites: {
        front: this.state.frontUrl,
        back: this.state.backUrl
      }
    }
    fetch('http://localhost:3000/pokemon',{
    method:'POST',
    body:JSON.stringify(data),
    headers:{
      "Content-Type":"application/json",
      Accept:"application/json"
    }
    })
    .then(r => r.json())
    .then(pokemon => this.props.addPokemon(pokemon))
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={this.handleNameChange} value={this.state.name} />
            <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={this.handleHpChange} value={this.state.hp}/>
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" onChange={this.handleFrontUrlChange} value={this.state.frontUrl}/>
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" onChange={this.handleBackUrlChange} value={this.state.backUrl}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
