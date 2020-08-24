import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
class Generate extends Component {
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
          <ModalHeader toggle={this.toggle}>Generate Bill</ModalHeader>
          <ModalBody>Bill Details</ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>
              Download
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

export default Generate;
