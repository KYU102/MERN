import React, {Component} from "react";

class Todo extends Component {
    render() {
        return (
            <div>
                <h2>Things I need to do:</h2>
                <ul>
                    <li>Learn React</li>
                    <li>Climb Mt. Everest</li>
                    <li>Run a Marathon</li>
                    <li>Feed the dogs</li>
                </ul>
            </div>
        )
    }
}

export default Todo;