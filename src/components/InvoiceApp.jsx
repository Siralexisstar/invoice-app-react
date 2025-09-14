import { getInvoice } from "../services/getInvoice";
export const InvoiceApp = () => {
  // With this function can obtain the data from the invoice.js
  const { id, name, client, company, items } = getInvoice();
  const { name: nameClient, lastName } = client;
  const { country, city, street } = client.address;

  return (
    <>
      <h1>Ejemplo Factura</h1>
      <ul>
        <li>Id: {id} </li>
        <li>Name: {name} </li>
      </ul>

      <h3>Datos del cliente</h3>
      <ul>
        <li>Nombre del cliente: {nameClient} </li>
        <li>Apellido: {lastName} </li>
        <li>Pais: {country} </li>
        <li>Ciudad: {city} </li>
        <li>Calle: {street} </li>
      </ul>
      <h3>Datos de la empresa</h3>
      <ul>
        <li>{company.name}</li>
        <li>{company.fiscalNumber}</li>
      </ul>
      <h4>Productos de la factura</h4>
      <table>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
          </tr>
        </thead>
        <tbody>
          {items.map((i) => {
            return (
              <>
                <tr>
                  <td>{i.product}</td>
                  <td>{i.price}</td>
                  <td>{i.quantity}</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
