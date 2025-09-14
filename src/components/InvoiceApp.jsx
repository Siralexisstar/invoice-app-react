import { getInvoice } from "../services/getInvoice";
export const InvoiceApp = () => {
    
  // With this function can obtain the data from the invoice.js
  const invoice = getInvoice();

  return (
    <>
      <h1>Ejemplo Factura</h1>
      <ul>
        <li>Id: {invoice.id}</li>
        <li>Name: {invoice.name} </li>
      </ul>
    </>
  );
};
