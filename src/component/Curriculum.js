import React from 'react';
import { Container, Row, Col, Card, ListGroup, Navbar, Nav } from 'react-bootstrap';

const Curriculum = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">DSA Curriculum</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              {/* <Nav.Link href="#beginner">Beginner</Nav.Link>
              <Nav.Link href="#intermediate">Intermediate</Nav.Link>
              <Nav.Link href="#advanced">Advanced</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Curriculum Content
      <Container className="mt-4">
        <Row>
          <Col md={3}>
            <Card>
              <Card.Body>
                <Card.Title>Beginner</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">11.5 Months</Card.Subtitle>
                <ListGroup variant="flush">
                  <ListGroup.Item>Programming Language Fundamentals (2 Months)</ListGroup.Item>
                  <ListGroup.Item className="active">Data Structures and Algorithms (4.5 Months)</ListGroup.Item>
                  <ListGroup.Item>SQL (0.5 Month)</ListGroup.Item>
                  <ListGroup.Item>LLD and Project Specializations (3.5 Months)</ListGroup.Item>
                  <ListGroup.Item>System Design Essentials (1 Month)</ListGroup.Item>
                  <ListGroup.Item>Electives (1-2 Months)</ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>

          <Col md={9}>
            <Card className="text-left">
              <Card.Body>
                <Card.Title>Data Structures and Algorithms</Card.Title>
                <Card.Text>
                  <ul>
                    <li>Time and Space Complexity</li>
                    <li>Array Problem Solving Techniques</li>
                    <li>Bit Manipulation</li>
                    <li>Maths for Problem Solving</li>
                    <li>Recursion</li>
                    <li>Backtracking</li>
                    <li>Sorting</li>
                    <li>Searching (Binary Search)</li>
                    <li>Two Pointers</li>
                    <li>Hashing</li>
                    <li>Strings and Pattern Matching</li>
                    <li>Data Structures</li>
                    <ul>
                      <li>Linked Lists</li>
                      <li>Stacks</li>
                      <li>Queues</li>
                    </ul>
                  </ul>
                </Card.Text>
                <a href="#sql" className="btn btn-primary">Read Next: Module 3 - SQL</a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container> */}
    </div>
  );
};

export default Curriculum;
