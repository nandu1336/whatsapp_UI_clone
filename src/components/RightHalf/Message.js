import { Col, Container, Row } from "react-bootstrap"

const Message = (props) => {

    const messageBoxStyle = { maxWidth: "65%", textAlign: "left", backgroundColor: "#A3EBB1", padding: "1%", display: "inline-block" }
    const getProcessedTime = (time) => {
        time = time.split(":");
        time = time[0] + ":" + time[1];
        return time;
    }
    return (
        <Container className="d-inline-block">
            <Row className={props.message.reply ? "float-left" : "float-right"}
                style={{ width: "100%" }}
            >

                <Col>
                    <p style={messageBoxStyle} className={props.message.reply ? "float-left" : "float-right"}>
                        {props.message.message}
                        <sub className="float-right mt-2 ml-2">{getProcessedTime(props.message.time)}</sub>
                    </p>
                </Col>

            </Row>
        </Container>
    )
}

export default Message;