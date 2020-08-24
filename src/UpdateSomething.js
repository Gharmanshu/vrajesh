import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
class UpdateSomething extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  handleShow = () => {
    this.setState({ show: true });
  };

  toggle = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    return (
      <div>
        <Modal isOpen={this.state.show} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Update this event</ModalHeader>
          <ModalBody>Input form to edit details</ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>
              Update
            </Button>{" "}
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default UpdateSomething;
