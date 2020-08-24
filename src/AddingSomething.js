import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
class AddingSomething extends Component {
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
          <ModalHeader toggle={this.toggle}>Add</ModalHeader>
          <ModalBody>Input form to add something</ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>
              Submit
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

export default AddingSomething;
