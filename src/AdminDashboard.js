import React, { Component } from "react";
import {
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
  Container,
} from "reactstrap";
import AppNav from "./AppNav";

class AdminDashboard extends Component {
  state = {};
  render() {
    return (
      <div>
        <AppNav />
        <br />
        <br />
        <br />
        <Container>
          <Row>
            <Col>
              <Card body>
                <CardTitle className="text-center">
                  <h3>Manager Details</h3>
                </CardTitle>
                <CardText></CardText>
                <Button href="/manager">Enter</Button>
              </Card>
            </Col>
            <Col>
              <Card body>
                <CardTitle className="text-center">
                  <h3>Clerk Details</h3>
                </CardTitle>
                <CardText></CardText>
                <Button href="/clerk">Enter</Button>
              </Card>
            </Col>
            <Col>
              <Card body>
                <CardTitle className="text-center">
                  <h3>Employee Details</h3>
                </CardTitle>
                <CardText></CardText>
                <Button href="/employee">Enter</Button>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default AdminDashboard;
