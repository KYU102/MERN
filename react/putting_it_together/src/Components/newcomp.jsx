


import React, {Component} from 'react';

class Newcomp extends Component{
    constructor(props){
        super(props);
        this.state = {
            num : this.props.age
        };
    }

    add = () => {
        let {num} = this.state 
        this.setState ({ "num" : num + 1 })
    }

    render(){
        return(
            <div>
                <h1>{this.props.name}</h1>
                <p>age: {this.state.num}</p>
                <p>Hair Color: {this.props.hair}</p>
                <button onClick={this.add} >Birthday Button for {this.props.name}</button>
            </div>
        );
    }
}

export default Newcomp; 