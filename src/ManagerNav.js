import React, { useState } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
  Container,
} from "reactstrap";
import ProductDetails from "./ProductDetails";
import PurchaseDetails from "./PurchaseDetails";
import classnames from "classnames";
import SupplierDetails from "./SupplierDetails";
import SalesDetails from "./SalesDetails";

const ManagerNav = (props) => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div>
      <Container>
        <br />
        <br />
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "1" })}
              onClick={() => {
                toggle("1");
              }}
            >
              Product Details
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "2" })}
              onClick={() => {
                toggle("2");
              }}
            >
              Purchase Details
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "3" })}
              onClick={() => {
                toggle("3");
              }}
            >
              Supplier Details
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "4" })}
              onClick={() => {
                toggle("4");
              }}
            >
              Sales Details
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <ProductDetails />
          </TabPane>
          <TabPane tabId="2">
            <PurchaseDetails />
          </TabPane>
          <TabPane tabId="3">
            <SupplierDetails />
          </TabPane>
          <TabPane tabId="4">
            <SalesDetails />
          </TabPane>
        </TabContent>
      </Container>
    </div>
  );
};

export default ManagerNav;
