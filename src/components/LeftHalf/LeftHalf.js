import React from "react";
import Header from "./Header.js";
import RecentChats from "./RecentChats";

export default class LeftHalf extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            chats: [
                { "personName": "Nandu", "lastMessage": new Date().toString(), "isGroup": false },
                { "personName": "College Friends", "lastMessage": new Date().toString(), "isGroup": true }
            ]
        }
    }

    render() {
        return (
            <div className="d-flex flex-column bg-dark">
                <div className="h-9 p-0 ">
                    <Header />
                </div>

                <div className="h-83 p-0 mt-1" style={this.chatAreaStyle}>
                    <RecentChats chats={this.state.chats} />
                </div>

                <div className="h-9 p-0 ">
                    <h3> This is the 3rd section of left area.</h3>
                </div>
            </div>
        )

    }
}

