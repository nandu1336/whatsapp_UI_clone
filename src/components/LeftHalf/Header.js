import { Col, Container, Row, Button } from "react-bootstrap";
import MdiAccountGroup from "mdi-react/AccountGroupIcon";
import MdiAccount from "mdi-react/AccountIcon";
import MdiMessageText from "mdi-react/MessageTextIcon";
import MdiDotsVertical from "mdi-react/DotsVerticalIcon";

const Header = (props) => {
    let containerStyle = { paddingLeft: "1rem", paddingRight: "1rem" };
    let spanStyle = { borderRadius: "10rem" };

    return (
        <Container style={containerStyle}>
            <Row className="row navbar navbar-expand-md navbar-light bg-ivory pl-0">

                <Col md={{ span: 2, offset: 0 }} className="brand-area justify-content-start">
                    <div className="col navbar-brand p-0">
                        <span className="bg-white mr-5 mt-2 p-1" style={spanStyle}>
                            {props.isGroup ? <MdiAccountGroup color="fff" size={26} /> : <MdiAccount color="fff" size={26} />}
                        </span>
                        <span style={{ overflow: "hidden" }}>
                            {props.roomName}
                            {/* this is test name for a group so that we can see how far it goes. Okay looks fine till now. */}
                        </span>
                    </div>
                </Col>

                <Col md={{ span: 3, offset: 8 }}>
                    <div className="col navbar-nav">
                        <Button className="nav-item nav-link active" variant="link" onClick={props.handleSearch}>
                            <MdiMessageText />
                        </Button>
                        <Button className="nav-item nav-link active" variant="link" onClick={props.showSettings}>
                            <MdiDotsVertical />
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Header;