import React, { useState } from "react";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
} from "reactstrap";

const SalesDetails = (props) => {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);

  return (
    <Container>
      <br />
      <h3>Sales Details</h3>
      <br />
      <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>Filter option</DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Sales by salesperson</DropdownItem>
          <DropdownItem>Month-wise Sales</DropdownItem>
          <DropdownItem>Product-wise Sales</DropdownItem>
          <DropdownItem>Weekly Sales</DropdownItem>
          <DropdownItem>Annual Sales</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
      <br />
      <br />
      <div>Dynamic List according to choice</div>
    </Container>
  );
};

export default SalesDetails;
