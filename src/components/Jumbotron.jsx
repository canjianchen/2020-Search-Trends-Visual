import React from 'react';
import '../App.css';
import { Row, Col, Container, Jumbotron } from 'react-bootstrap';
export function JumbotronSect() {
    let styles = {
        marginTop: '9%',
      };
    return (
        <Jumbotron class="d-flex align-items-center jumbotron  ">
            <Container style={styles}>
                <Row >
                    <Col></Col>
                    <Col md={8}>
                        <div >
                            <h1>Hello, world!</h1>
                            <p>
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}