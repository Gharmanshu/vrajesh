import React, { Component } from "react";
import {
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Button,
  Container,
} from "reactstrap";
import AddingSomething from "./AddingSomething";
import UpdateSomething from "./UpdateSomething";
import Generate from "./Generate";
import AppNav from "./AppNav";
class Employee extends Component {
  state = {};

  addEvent = () => {
    this.showModal();
  };

  updateEvent = () => {
    this.showModal2();
  };

  modalRef2 = ({ handleShow }) => {
    this.showModal2 = handleShow;
  };

  modalRef = ({ handleShow }) => {
    this.showModal = handleShow;
  };
  render() {
    return (
      <div>
        <AppNav />
        <br />
        <Container>
          <h3>
            Employee List
            <span>
              <Button
                outline
                color="danger"
                className="float-right"
                onClick={this.addEvent}
              >
                Add New
              </Button>
            </span>
          </h3>
          <br />
          <ListGroup>
            <ListGroupItem tag="a" href="#" action onClick={this.updateEvent}>
              Employee 1 info
            </ListGroupItem>
            <ListGroupItem tag="a" href="#" action onClick={this.updateEvent}>
              Employee 2 info
            </ListGroupItem>
            <ListGroupItem tag="a" href="#" action onClick={this.updateEvent}>
              Employee 3 info
            </ListGroupItem>
            <ListGroupItem tag="a" href="#" action onClick={this.updateEvent}>
              Employee 4 info
            </ListGroupItem>
            <ListGroupItem tag="a" href="#" action onClick={this.updateEvent}>
              Employee 5 info
            </ListGroupItem>
          </ListGroup>
          <AddingSomething ref={this.modalRef}></AddingSomething>
          <UpdateSomething ref={this.modalRef2}></UpdateSomething>
        </Container>
      </div>
    );
  }
}

export default Employee;
