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

  handleChange = (event, {name, value} ) => {
  this.setState({
      [name]: value
    })
  }

  // handleSubmit = (event) => {
  //   this.setState({
  //     name: event.target.name.value,
  //     hp: event.target.hp.value,
  //     frontUrl: event.target.frontUrl.value,
  //     backUrl: event.target.backUrl.value
  //   })
  // }

  handleSubmit = () => {
    let foo = this.state
    const {name, hp, frontUrl, backUrl} = this.state

    let data = {
      name: name,
      stats:
        [{
          name: "hp",
          value: hp
        }],
      sprites:
        {
          front: frontUrl,
          back: backUrl
        }
    }
    console.log("pre post new pokemon")
    this.props.postNewPokemon(data)
  }



  render() {
    const {name, hp, frontUrl, backUrl} = this.state
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={this.handleChange} value={name} />
            <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={this.handleChange} value={hp} />
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" onChange={this.handleChange} value={frontUrl} />
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" onChange={this.handleChange} value={backUrl} />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
