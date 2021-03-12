import moment from 'moment';

export const products = [{ 
  "id": "1",
  "item": "01",
  "code": "7N2532",
  "title": "SEAL O RING",
  "qty": 10,
  "salePrice": 2.75,
  "totalItem": 27.50
},
{ "id": "2",
  "item": "02",
  "code": "0301165",
  "title": "CARTRIDGE TURBO",
  "qty": 10,
  "salePrice": 3865.5,
  "totalItem": 38655
},
{ "id": "3",
  "item": "03",
  "code": "P554045",
  "title": "PRIMARY AIR FILTER",
  "qty": 2,
  "salePrice": 35,
  "totalItem": 70
}]

export const buyerData = {
  "name": "IMG International",
  "address": "Urbanización Unare II. Avenida Paseo Caroní. Puerto Ordaz Edo. Bolívar",
  "rif": "J-30354578-1",
  "phones": "0286-9945258 - 9947874",
  "purchaseOrder": "6510-85-9",
  "paymentConditions": "CREDITO 30 DÍAS"
}

export const saleData = {
  "saleDate": moment().format("DD/MM/YYYY"),
  "controlNumber": "2102-05",
  "deliveryMode": true
}