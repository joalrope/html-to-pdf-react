import React from 'react'
import { columns } from './products-for-sale-table'
import {products} from './saleData'
import { TableAttrib } from './table-attrib-class'
import '../styles.css'

export const InvoiceBody = () => {

  const attrib = new TableAttrib(columns)
  
  if (products.length < 10) {
    let i = products.length
    while (i < 9){
      i++
      products[i] = {
        "id": i,
        "item": `0${i}`,
        "code": "",
        "title": "",
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
            {
              <tr>
                {
                  Object.keys(products[0]).map((key) => (
                    attrib.isCellVisible(key) && <th key={key}>{attrib.getTitleHeader(key)}</th>
                  ))
                }
              </tr>
            }
        </thead>
        <tbody>
          {
            Object.values(products).map((values) => (
              <tr key={values.id}>
                {
                  Object.entries(values).map(([key, value]) => (
                    attrib.isCellVisible(key) && 
                        <td key={key}
                            className={attrib.getCellClass(key)}
                        >
                            {attrib.getCellValue(key, value)}
                        </td>
                  ))
                }

              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}
