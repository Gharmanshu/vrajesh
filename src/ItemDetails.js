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
class ItemDetails extends Component {
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

  generateBill = () => {
    this.showModal3();
  };

  modalRef3 = ({ handleShow }) => {
    this.showModal3 = handleShow;
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
            Item List
            <span>
              <Button
                outline
                color="danger"
                className="float-right"
                onClick={this.addEvent}
              >
                Add New
              </Button>
              <Button
                outline
                color="primary"
                className="float-right"
                onClick={this.generateBill}
              >
                Generate Bill
              </Button>
            </span>
          </h3>
          <br />
          <ListGroup>
            <ListGroupItem tag="a" href="#" action onClick={this.updateEvent}>
              Bill Detail 1
            </ListGroupItem>
            <ListGroupItem tag="a" href="#" action onClick={this.updateEvent}>
              Bill Detail 2
            </ListGroupItem>
            <ListGroupItem tag="a" href="#" action onClick={this.updateEvent}>
              Bill Detail 3
            </ListGroupItem>
            <ListGroupItem tag="a" href="#" action onClick={this.updateEvent}>
              Bill Detail 4
            </ListGroupItem>
            <ListGroupItem tag="a" href="#" action onClick={this.updateEvent}>
              Bill Detail 5
            </ListGroupItem>
          </ListGroup>
          <AddingSomething ref={this.modalRef}></AddingSomething>
          <UpdateSomething ref={this.modalRef2}></UpdateSomething>
          <Generate ref={this.modalRef3}></Generate>
        </Container>
      </div>
    );
  }
}

export default ItemDetails;
