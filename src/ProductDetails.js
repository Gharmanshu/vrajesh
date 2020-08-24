import React, { Component } from "react";
import { Row, Col, ListGroup, ListGroupItem, Button } from "reactstrap";
import AddingSomething from "./AddingSomething";
import UpdateSomething from "./UpdateSomething";
class ProductDetails extends Component {
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
          Product List
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
            Product 1
          </ListGroupItem>
          <ListGroupItem tag="a" href="#" action onClick={this.updateEvent}>
            Product 2
          </ListGroupItem>
          <ListGroupItem tag="a" href="#" action onClick={this.updateEvent}>
            Product 3
          </ListGroupItem>
          <ListGroupItem tag="a" href="#" action onClick={this.updateEvent}>
            Product 4
          </ListGroupItem>
          <ListGroupItem tag="a" href="#" action onClick={this.updateEvent}>
            Product 5
          </ListGroupItem>
        </ListGroup>
        <AddingSomething ref={this.modalRef}></AddingSomething>
        <UpdateSomething ref={this.modalRef2}></UpdateSomething>
      </div>
    );
  }
}

export default ProductDetails;
