import { getInvoice } from "../services/getInvoice";
export const InvoiceApp = () => {
  // With this function can obtain the data from the invoice.js
  const { id, name, client, company, items } = getInvoice();
  const { name: nameClient, lastName } = client;
  const { country, city, street } = client.address;

  return (
    <>
      <div className="container">
        <div className="card my-3">
          <div className="card-header">Invoice</div>
          <div className="card-body">
            <ul className="list-group">
              <li className="list-group-item">Id: {id} </li>
              <li className="list-group-item">Name: {name} </li>
            </ul>

            <div className="row my-3">
              <div className="col">
                <h3>Customer data</h3>
                <ul className="list-group">
                  <li className="list-group-item active">
                    {nameClient} {lastName}
                  </li>
                  <li className="list-group-item">{country} </li>
                  <li className="list-group-item">{city} </li>
                  <li className="list-group-item">{street} </li>
                </ul>
              </div>
              <div className="col">
                <h3>Company Details</h3>
                <ul className="list-group">
                  <li className="list-group-item active">{company.name}</li>
                  <li className="list-group-item">{company.fiscalNumber}</li>
                </ul>
              </div>
            </div>

            <h4>Invoice Products</h4>
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody>
                {items.map((i) => {
                  return (
                    <tr key={i.id}>
                      <td>{i.product}</td>
                      <td>{i.price}</td>
                      <td>{i.quantity}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
