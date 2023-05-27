import React from 'react';
import './BuyerItems.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const BuyerItems = ({ items, onAddToCart }) => {
  const handleSizeButtonClick = (item, size) => {
    onAddToCart(item, size);
    decreaseQuantity(item, size);
  };

  const decreaseQuantity = (item, size) => {
    item[size] -= 1;
  };

  return (
    <div className='dashboard-container'>
      <h2>Buyer Dashboard</h2>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Large</th>
            <th>Medium</th>
            <th>Small</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.name}>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>${item.price}</td>
              <td>
                <Button
                  variant="primary"
                  disabled={item.large === 0}
                  onClick={() => handleSizeButtonClick(item, 'large')}
                >
                  Large ({item.large})
                </Button>
              </td>
              <td>
                <Button
                  variant="primary"
                  disabled={item.medium === 0}
                  onClick={() => handleSizeButtonClick(item, 'medium')}
                >
                  Medium ({item.medium})
                </Button>
              </td>
              <td>
                <Button
                  variant="primary"
                  disabled={item.small === 0}
                  onClick={() => handleSizeButtonClick(item, 'small')}
                >
                  Small ({item.small})
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default BuyerItems;
