import React from "react";
import './invoice.css'
import { InvoiceBody } from "./InvoiceBody";
import { InvoiceFooter } from "./InvoiceFooter";
import { InvoiceHeader } from "./InvoiceHeader";

export const  Invoice = () => {
    return (
      <div className="container">
        <InvoiceHeader/>
        <InvoiceBody/>
        <InvoiceFooter/>
      </div>
    );
}
