import React from 'react'

export const InvoiceFooter = () => {
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
          <div className="to-fill-summ">32.560,50</div>
        </div>
        <div className="row-summ">
          <div className="descrip-summ">IVA 16% Bs.:</div>
          <div className="to-fill-summ">4.500,32</div>
        </div>
        <div className="row-summ">
          <div className="descrip-summ">TOTAL GENERAL:</div>
          <div className="to-fill-summ">37.060,82</div>
        </div>
      </div>
    </div>   
  )
}
