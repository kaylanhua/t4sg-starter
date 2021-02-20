import React from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export class Facts extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            persons : ''
        };

        this.componentDidMount = this.componentDidMount.bind(this);
    }

  componentDidMount() {

    const min = 0;
    const max = 5;
    const rand = Math.floor(min + Math.random() * (max - min));

    axios.get(`https://cat-fact.herokuapp.com/facts`
    )
      .then(res => {
        const persons = res.data[rand].text;
        console.log(persons);
        this.setState({ persons });
      })
  }

  render() {
    return (
        <div>
            <Button onClick={this.componentDidMount}>Get random fact</Button>
            <br/>
            <br/>
            <p> random fact: { this.state.persons } </p>
        </div>
    )
  }
}