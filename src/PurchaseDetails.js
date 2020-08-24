import React, { Component } from "react";
import { Row, Col, ListGroup, ListGroupItem, Button } from "reactstrap";
import AddingSomething from "./AddingSomething";
import UpdateSomething from "./UpdateSomething";
class PurchaseDetails extends Component {
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
        <br />
        <h3>
          Purchase List
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
            Purchase 1
          </ListGroupItem>
          <ListGroupItem tag="a" href="#" action onClick={this.updateEvent}>
            Purchase 2
          </ListGroupItem>
          <ListGroupItem tag="a" href="#" action onClick={this.updateEvent}>
            Purchase 3
          </ListGroupItem>
          <ListGroupItem tag="a" href="#" action onClick={this.updateEvent}>
            Purchase 4
          </ListGroupItem>
          <ListGroupItem tag="a" href="#" action onClick={this.updateEvent}>
            Purchase 5
          </ListGroupItem>
        </ListGroup>
        <AddingSomething ref={this.modalRef}></AddingSomething>
        <UpdateSomething ref={this.modalRef2}></UpdateSomething>
      </div>
    );
  }
}

export default PurchaseDetails;
