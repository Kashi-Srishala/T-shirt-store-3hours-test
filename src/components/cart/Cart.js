import React from 'react';
import './Cart.css';
import Table from 'react-bootstrap/Table';

const Cart = ({ cartItems }) => {
  return (
    <div className='cart-container'>
      <h2>Cart</h2>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Size</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map(item => (
            <tr key={item.name}>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.price}</td>
              <td>{item.size}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Cart;
