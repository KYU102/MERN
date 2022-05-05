import React, {Component} from 'react';

class Newcomp extends Component{
    render(){
        return(
            <div>
                <h1>{this.props.name}</h1>
                <p>age: {this.props.age}</p>
                <p>Hair Color: {this.props.hair}</p>
            </div>
        );
    }
}

export default Newcomp; 