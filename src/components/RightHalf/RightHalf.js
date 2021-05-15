import { Component } from 'react';
import Header from './Header';
import ChatBar from './ChatBar';
import ChatArea from './ChatArea';

export default class RightHalf extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
        }

        this.chatAreaStyle = {
            overflow: "auto",
            overflowX: "hideden"
        };
    }

    handleMessageSent = (message, clearMessageInBar) => {
        let msgs = this.state.messages;
        msgs.push(message);
        this.setState({ messages: msgs })
        clearMessageInBar();
    }

    render() {
        return (
            <div className="d-flex flex-column bg-dark">
                <div className="h-9 p-0 ">
                    <Header />
                </div>

                <div className="h-83 p-0 mt-1" style={this.chatAreaStyle}>
                    <ChatArea messages={this.state.messages} />
                </div>

                <div className="h-9 p-0 ">
                    <ChatBar handleMessageSent={this.handleMessageSent} />
                </div>
            </div>
        )
    }
}