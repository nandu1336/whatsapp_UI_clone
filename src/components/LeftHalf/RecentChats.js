import { Component } from "react";
import Chat from "./Chat";

export default class RecentChats extends Component {

    render() {
        return (
            <div>
                {console.log("this.props:", this.props.chats)}
                {this.props.chats.map((chat, index) => <Chat key={index} chat={chat} />)}
            </div>
        );
    }
}