import { Component } from "react";
import { Col, Container, ListGroupItem, Row } from "react-bootstrap";
import MdiAccount from "mdi-react/AccountIcon";
import MdiAccountGroup from "mdi-react/AccountGroupIcon";

export default class Chat extends Component {
    componentDidMount() {
        console.log("this.props:::", this.props)
    }
    getProcessedLastMessageTime = (date) => {
        console.log(date);

        let today = new Date().getTime();
        let givenDate = new Date(date).getTime();

        let difference = today - givenDate;
        difference = (difference * 60 < 24 * 60)
        console.log("difference::", difference);

        //  difference ? 

    }
    render() {
        return (
            <Container>
                <Row>
                    <Col md={1}>
                        {this.props.chat.isGroup ? <MdiAccountGroup /> : <MdiAccount />}
                        {/* {this.props.chat.personImage} */}
                    </Col>
                    <Col md={9}>{this.props.chat.personName}</Col>
                    <Col md={1}>{this.getProcessedLastMessageTime(this.props.chat.lastMessage)}</Col>
                </Row>
            </Container>
        )
    }
}

