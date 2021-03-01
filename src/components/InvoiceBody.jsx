import React from 'react'
import {products} from './saleData'

export const InvoiceBody = () => {
  
  if (products.length < 10) {
    let i = products.length
    while (i < 9){
      i++
      products[i] = {
        "id": i,
        "item": `0${i}`,
        "code": "",
        "descrip": "",
        "qty": "",
        "salePrice": "",
        "totalItem": ""
      } 
    }
} 

  
  return (
    <div className="invoice-body">
      <table className="products-table">
        <thead>
          <tr>
            <th style={{width: '5vw',  textAlign: 'center'}}>ITEM</th>
            <th style={{width: '10vw', textAlign: 'center'}}>N° PARTE</th>
            <th style={{width: '60vw', textAlign: 'center'}}>DESCRIPCION</th>
            <th style={{width: '8vw',  textAlign: 'center'}}>CANT.</th>
            <th style={{width: '15vw', textAlign: 'center'}}>P. UNITARIO</th>
            <th style={{width: '15vw', textAlign: 'center'}}>TOTAL ITEM</th>
          </tr>
        </thead>
        <tbody>
          {
            products.map(({id, item, code, descrip, qty, salePrice, totalItem}) => 
              <tr key={id}>
                <td style={{textAlign: 'center'}}>{item}</td>
                <td style={{textAlign: 'center'}}>{code}</td>
                <td style={{textAlign: 'left'}}>{descrip}</td>
                <td style={{textAlign: 'center'}}>{qty}</td>
                <td style={{textAlign: 'right'}}>{ (salePrice > 0) ? salePrice.toLocaleString('es-ES', { maximumFractionDigits: 2, minimumFractionDigits: 2 }) : '' }</td>
                <td style={{textAlign: 'right'}}>{ (totalItem > 0) ? new Intl.NumberFormat("es-ES").format(totalItem.toFixed(2)) : '' }</td>
              </tr>
            )}
        </tbody>
      </table>
    </div>
  )
}
