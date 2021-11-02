import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
    Alert,
    Badge,
    Button,
    Card,
    Carousel,
    Col,
    Form,
    Modal,
    OverlayTrigger,
    Placeholder,
    Popover,
    Row,
    ProgressBar,
    Spinner,
    Table,
} from "react-bootstrap";
import { useState } from "react";
import NavbarComponent from "./NavbarComponent";

function App() {
    const [show, setShow] = useState(true);
    const [modalShow, setModalShow] = React.useState(false);
    function AlertDismissibleExample() {
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
    function MyVerticallyCenteredModal(props) {
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Modal heading
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Centered Modal</h4>
                    <p>
                        Cras mattis consectetur purus sit amet fermentum. Cras
                        justo odio, dapibus ac facilisis in, egestas eget quam.
                        Morbi leo risus, porta ac consectetur ac, vestibulum at
                        eros.
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
    return (
        <>
            <NavbarComponent />
            <div className="App">
                <div className="d-flex justify-content-around">
                    <Card style={{ width: "18rem" }}>
                        <Card.Img
                            variant="top"
                            src="https://images.unsplash.com/photo-1635549298330-186987c31a26?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
                        />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: "18rem" }}>
                        <Card.Img
                            variant="top"
                            src="https://images.unsplash.com/photo-1635549298330-186987c31a26?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
                        />
                        <Card.Body>
                            <Placeholder as={Card.Title} animation="glow">
                                <Placeholder xs={6} />
                            </Placeholder>
                            <Placeholder as={Card.Text} animation="glow">
                                <Placeholder xs={7} /> <Placeholder xs={4} />{" "}
                                <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
                                <Placeholder xs={8} />
                            </Placeholder>
                            <Placeholder.Button variant="primary" xs={6} />
                        </Card.Body>
                    </Card>
                </div>
                <>
                    <Placeholder xs={12} />

                    <Placeholder xs={12} bg="primary" />
                    <Placeholder xs={12} bg="secondary" />
                    <Placeholder xs={12} bg="success" />
                    <Placeholder xs={12} bg="danger" />
                    <Placeholder xs={12} bg="warning" />
                    <Placeholder xs={12} bg="info" />
                    <Placeholder xs={12} bg="light" />
                    <Placeholder xs={12} bg="dark" />
                </>
                <>
                    {["top", "right", "bottom", "left"].map(placement => (
                        <OverlayTrigger
                            trigger="click"
                            key={placement}
                            placement={placement}
                            overlay={
                                <Popover id={`popover-positioned-${placement}`}>
                                    <Popover.Header as="h3">{`Popover ${placement}`}</Popover.Header>
                                    <Popover.Body>
                                        <strong>Holy guacamole!</strong> Check
                                        this info.
                                    </Popover.Body>
                                </Popover>
                            }
                        >
                            <Button variant="secondary">
                                Popover on {placement}
                            </Button>
                        </OverlayTrigger>
                    ))}
                </>
                <ProgressBar animated now={45} />
                <>
                    <Spinner animation="border" variant="primary" />
                    <Spinner animation="border" variant="secondary" />
                    <Spinner animation="border" variant="success" />
                    <Spinner animation="border" variant="danger" />
                    <Spinner animation="border" variant="warning" />
                    <Spinner animation="border" variant="info" />
                    <Spinner animation="border" variant="light" />
                    <Spinner animation="border" variant="dark" />
                    <Spinner animation="grow" variant="primary" />
                    <Spinner animation="grow" variant="secondary" />
                    <Spinner animation="grow" variant="success" />
                    <Spinner animation="grow" variant="danger" />
                    <Spinner animation="grow" variant="warning" />
                    <Spinner animation="grow" variant="info" />
                    <Spinner animation="grow" variant="light" />
                    <Spinner animation="grow" variant="dark" />
                </>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td colSpan="2">Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </Table>

                <header className="App-header">
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://images.unsplash.com/photo-1635840030615-8a89829e4cd8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>
                                    Nulla vitae elit libero, a pharetra augue
                                    mollis interdum.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://images.unsplash.com/photo-1635840030615-8a89829e4cd8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80"
                                alt="Second slide"
                            />

                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://images.unsplash.com/photo-1635840030615-8a89829e4cd8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80"
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>
                                    Praesent commodo cursus magna, vel
                                    scelerisque nisl consectetur.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
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
                    <Button variant="primary">
                        Profile <Badge bg="secondary">9</Badge>
                        <span className="visually-hidden">unread messages</span>
                    </Button>
                    <div>
                        <Badge bg="primary">Primary</Badge>{" "}
                        <Badge bg="secondary">Secondary</Badge>{" "}
                        <Badge bg="success">Success</Badge>{" "}
                        <Badge bg="danger">Danger</Badge>{" "}
                        <Badge bg="warning" text="dark">
                            Warning
                        </Badge>{" "}
                        <Badge bg="info">Info</Badge>{" "}
                        <Badge bg="light" text="dark">
                            Light
                        </Badge>{" "}
                        <Badge bg="dark">Dark</Badge>
                    </div>
                    <>
                        <Button variant="outline-primary">Primary</Button>{" "}
                        <Button variant="outline-secondary">Secondary</Button>{" "}
                        <Button variant="outline-success">Success</Button>{" "}
                        <Button variant="outline-warning">Warning</Button>{" "}
                        <Button variant="outline-danger">Danger</Button>{" "}
                        <Button variant="outline-info">Info</Button>{" "}
                        <Button variant="outline-light">Light</Button>{" "}
                        <Button variant="outline-dark">Dark</Button>
                    </>
                    <>
                        <Form.Label htmlFor="exampleColorInput">
                            Color picker
                        </Form.Label>
                        <Form.Control
                            type="color"
                            id="exampleColorInput"
                            defaultValue="#563d7c"
                            title="Choose your color"
                        />
                    </>
                    <Form>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter email"
                                />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                />
                            </Form.Group>
                        </Row>

                        <Form.Group
                            className="mb-3"
                            controlId="formGridAddress1"
                        >
                            <Form.Label>Address</Form.Label>
                            <Form.Control placeholder="1234 Main St" />
                        </Form.Group>

                        <Form.Group
                            className="mb-3"
                            controlId="formGridAddress2"
                        >
                            <Form.Label>Address 2</Form.Label>
                            <Form.Control placeholder="Apartment, studio, or floor" />
                        </Form.Group>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>State</Form.Label>
                                <Form.Select defaultValue="Choose...">
                                    <option>Dhaka</option>
                                    <option>Barishal</option>
                                    <option>Chittagong</option>
                                    <option>Rajshahi</option>
                                    <option>Shylet</option>
                                    <option>Maymensing</option>
                                    <option>Khulna</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridZip">
                                <Form.Label>Zip</Form.Label>
                                <Form.Control />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" id="formGridCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                    <>
                        <Button
                            variant="primary"
                            onClick={() => setModalShow(true)}
                        >
                            Launch vertically centered modal
                        </Button>

                        <MyVerticallyCenteredModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
                    </>
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
                            message. This example text is going to run a bit
                            longer so that you can see how spacing within an
                            alert works with this kind of content.
                        </p>
                        <hr />
                        <p className="mb-0">
                            Whenever you need to, be sure to use margin
                            utilities to keep things nice and tidy.
                        </p>
                    </Alert>
                    <AlertDismissibleExample />
                    <Card className="text-center">
                        <Card.Header>Featured</Card.Header>
                        <Card.Body>
                            <Card.Title>Special title treatment</Card.Title>
                            <Card.Text>
                                With supporting text below as a natural lead-in
                                to additional content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                        <Card.Footer className="text-muted">
                            2 days ago
                        </Card.Footer>
                    </Card>
                </header>
            </div>
        </>
    );
}

export default App;
