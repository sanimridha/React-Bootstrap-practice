import logo from "./logo.svg";
import "./App.css";
import { Alert, Badge, Button, Col, Row } from "react-bootstrap";
import { useState } from "react";

function App() {
    function AlertDismissibleExample() {
        const [show, setShow] = useState(true);

        return (
            <>
                <Alert show={show} variant="success">
                    <Alert.Heading>How's it going?!</Alert.Heading>
                    <p>
                        Duis mollis, est non commodo luctus, nisi erat porttitor
                        ligula, eget lacinia odio sem nec elit. Cras mattis
                        consectetur purus sit amet fermentum.
                    </p>
                    <hr />
                    <div className="d-flex justify-content-end">
                        <Button
                            onClick={() => setShow(false)}
                            variant="outline-success"
                        >
                            Close me y'all!
                        </Button>
                    </div>
                </Alert>
                {!show && (
                    <Button onClick={() => setShow(true)}>Show Alert</Button>
                )}
            </>
        );
    }
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <Row className="mx-0">
                    <Button as={Col} variant="primary">
                        Button #1
                    </Button>
                    <Button as={Col} variant="secondary" className="mx-2">
                        Button #2
                    </Button>
                    <Button as={Col} variant="success">
                        Button #3
                    </Button>
                </Row>
                <div>
                    <h1>
                        Example heading <Badge bg="secondary">New</Badge>
                    </h1>
                    <h2>
                        Example heading <Badge bg="secondary">New</Badge>
                    </h2>
                    <h3>
                        Example heading <Badge bg="secondary">New</Badge>
                    </h3>
                    <h4>
                        Example heading <Badge bg="secondary">New</Badge>
                    </h4>
                    <h5>
                        Example heading <Badge bg="secondary">New</Badge>
                    </h5>
                    <h6>
                        Example heading <Badge bg="secondary">New</Badge>
                    </h6>
                </div>
                {[
                    "primary",
                    "secondary",
                    "success",
                    "danger",
                    "warning",
                    "info",
                    "light",
                    "dark",
                ].map((variant, idx) => (
                    <Alert key={idx} variant={variant}>
                        This is a {variant} alert—check it out!
                    </Alert>
                ))}
                <Alert variant="success">
                    <Alert.Heading>Hey, nice to see you</Alert.Heading>
                    <p>
                        Aww yeah, you successfully read this important alert
                        message. This example text is going to run a bit longer
                        so that you can see how spacing within an alert works
                        with this kind of content.
                    </p>
                    <hr />
                    <p className="mb-0">
                        Whenever you need to, be sure to use margin utilities to
                        keep things nice and tidy.
                    </p>
                </Alert>
                <AlertDismissibleExample />
            </header>
        </div>
    );
}

export default App;
