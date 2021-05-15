import { useState } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import MdiEmoticonOutline from "mdi-react/EmoticonOutlineIcon";
import MdiAttachment from "mdi-react/AttachmentIcon";
import MdiMicrophone from "mdi-react/MicrophoneIcon";
import MdiSend from "mdi-react/SendIcon";

const ChatBar = (props) => {
    let containerStyle = { paddingLeft: "1rem", paddingRight: "1rem" };
    let spanStyle = { borderRadius: "10rem" };
    const [message, setMessage] = useState("");
    const [reply, setReply] = useState(false);

    const handleInput = (e) => {
        // console.log("e:", e);
        console.log("befire key press message:", message);
        console.log("e.keycode", e.keyCode);
        if (e.keyCode === 13) {
            console.log("ENTER is pressed")
            let msg = message.concat("::");
            console.log("msg:", msg);
            setMessage(msg);
        }
        setMessage(e.target.value);
        console.log("after  key press message:", message);
    }

    const clearMessageInBar = () => {
        setMessage("");
        document.getElementById("text-input-box").value = "";
    }

    const handleMessageSent = (message) => {
        console.log("message in handleMessageSent:", message);
        let payload = {
            "message": message,
            "time": new Date().toLocaleTimeString(),
            "date": new Date().toLocaleDateString(),
            "reply": reply
        }
        setReply(!reply);
        props.handleMessageSent(payload, clearMessageInBar);
    }
    return (
        <Container style={containerStyle}>
            <Row className="row navbar navbar-expand-md navbar-light bg-ivory pl-0">

                <Col md={{ span: 2, offset: 0 }} className="p-0 brand-area justify-content-start">

                    <Button className="bg-d" variant="link" style={spanStyle}>
                        <MdiEmoticonOutline color="fff" size={26} />
                    </Button>

                    <Button className="clip-icon nav-item d-inline" variant="link" onClick={props.handleSearch}>
                        <MdiAttachment color="fff" />
                    </Button>
                </Col>

                <Col md={{ span: 9, offset: 0 }}>
                    <input type="text" id="text-input-box" className="message-box" onInput={(e) => setMessage(e.target.value)} onKeyDown={(e) => handleInput(e)} placeholder="Type a messages" />
                </Col>

                <Col md={{ span: 1, offset: 0 }} className="float-right">

                    {message.length === 0 ?
                        <Button variant="link" className="text-dark" onClick={() => console.log("clicked on mic")}><MdiMicrophone /></Button> :
                        <Button variant="link" className="text-dark"><MdiSend onClick={() => handleMessageSent(message)} /></Button>}

                </Col>
            </Row>
        </Container>
    )
}

export default ChatBar;