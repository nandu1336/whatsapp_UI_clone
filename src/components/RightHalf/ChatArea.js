import { Component } from "react";
import Message from "./Message";

export default class ChatArea extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidUpdate() {
        console.log("props in ChatArea.js::", this.props)
    }

    render() {
        return (
            <div className="bg-yellow">
                {this.props.messages.map((message, index) => <Message key={index} message={message} />)}
            </div>
        )
    }
}