import React, { Component } from "react";
import './invoice.css'
import { InvoiceBody } from "./InvoiceBody";
import { InvoiceFooter } from "./InvoiceFooter";
import { InvoiceHeader } from "./InvoiceHeader";

class Invoice extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <InvoiceHeader/>
        <InvoiceBody/>
        <InvoiceFooter/>
      </div>
    );
  }
}

export default Invoice;
