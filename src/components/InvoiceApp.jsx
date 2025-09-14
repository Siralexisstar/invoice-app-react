import { getInvoice } from "../services/getInvoice";
export const InvoiceApp = () => {

  // With this function can obtain the data from the invoice.js
  const {id, name, client, company, items} = getInvoice();
  const { name:nameClient, lastName} = client;
  const {country, city, street} = client.address;

  return (
    <>
      <h1>Ejemplo Factura</h1>
      <ul>
        <li>Id: { id } </li>
        <li>Name: { name } </li>
      </ul>

      <h3>Datos del cliente</h3>
      <ul>
        <li>Nombre del cliente: { nameClient } </li>
        <li>Apellido: { lastName } </li>
        <li>Pais: { country } </li>
        <li>Ciudad: { city } </li>
        <li>Calle: { street } </li>
      </ul>
    </>
  );
};
