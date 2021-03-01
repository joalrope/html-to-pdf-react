import React from 'react'
import {products} from './saleData';

export const InvoiceFooter = () => {
  const ivaTax = 0.16
  const purchaseTotal = products.reduce((total, {totalItem}) => total + totalItem, 0)
  const ivaTaxAmount = purchaseTotal * ivaTax
  const invoiceTotal = Number(purchaseTotal) + Number(ivaTaxAmount)

  return (
    <div className="invoice-footer">
      <div className="left-invoice-signature">
        <div className="row-sign">
          <div className="descrip-sign">RECIBIDO (FIRMA)</div>
          <div className="to-fill-sign"></div>
        </div>
        <div className="row-sign">
          <div className="descrip-sign">NOMBRE Y APELLIDO</div>
          <div className="to-fill-sign"></div>
        </div>
        <div className="row-sign">
          <div className="descrip-sign">CEDULA:</div>
          <div className="to-fill-sign"></div>
        </div>
      </div>
      <div className="right-invoice-signature">
        <div className="row-sign">
          <div className="descrip-sign">RECIBIDO (FIRMA)</div>
          <div className="to-fill-sign"></div>
        </div>
        <div className="row-sign">
          <div className="descrip-sign">NOMBRE Y APELLIDO</div>
          <div className="to-fill-sign"></div>
        </div>
        <div className="row-sign">
          <div className="descrip-sign">CEDULA:</div>
          <div className="to-fill-sign"></div>
        </div>
      </div>
      <div className="invoive-summary">
        <div className="row-summ">
          <div className="descrip-summ">SUB-TOTAL:</div>
          <div className="to-fill-summ">{ new Intl.NumberFormat("es-ES").format(purchaseTotal) }</div>
        </div>
        <div className="row-summ">
          <div className="descrip-summ">IVA 16% Bs.:</div>
          <div className="to-fill-summ">{ new Intl.NumberFormat("es-ES").format(ivaTaxAmount) }</div>
        </div>
        <div className="row-summ">
          <div className="descrip-summ">TOTAL GENERAL:</div>
          <div className="to-fill-summ">{ new Intl.NumberFormat("es-ES").format(invoiceTotal) }</div>
        </div>
      </div>
    </div>   
  )
}
