import React from 'react';
import ReactDOM from 'react-dom';

export class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = { userInput: '', output: '' };
    }

    handleChange = (event) => {
        this.setState({userInput: event.target.value});
        console.log("this is handleChange");
        console.log(event.target.value);
    }

    handleSubmit = (event) => {
        fetch('http://127.0.0.1:5000/reverse', {
            method: "POST",
            cache: "no-cache",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(this.state.userInput)
        }).then(response => {
            return response.json()
        }).
        then(json => {
            // console.log("this is handleSubmit")
            this.setState({output: json[0]})
        });
        console.log("this is handleSubmit");
        console.log(this.state.userInput);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} method='get'>
                <h2>String reversal:</h2>
                <input type="text"/>
                <input type="submit" onChange={this.handleChange}/>
                </form>
                <br></br>
                <p>The reversed string is {this.state.output}</p>
            </div>
        );
    }
}

ReactDOM.render(<Form/>, document.getElementById('root'));