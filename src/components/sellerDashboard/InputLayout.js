import React, { useState } from "react";
import './InputLayout.css'; // Import the CSS file

const InputLayout = ({ onAddItem }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [large, setLarge] = useState('');
  const [medium, setMedium] = useState('');
  const [small, setSmall] = useState('');

  const handleAddItem = () => {
    const newItem = {
      name,
      description,
      price,
      large,
      medium,
      small
    };
    onAddItem(newItem);

    setName('');
    setDescription('');
    setPrice('');
    setLarge('');
    setMedium('');
    setSmall('');
  };

  const nameChangeHandler = event => {
    setName(event.target.value);
  };

  const descriptionChangeHandler = event => {
    setDescription(event.target.value);
  };

  const priceChangeHandler = event => {
    setPrice(event.target.value);
  };

  const largeChangeHandler = event => {
    setLarge(event.target.value);
  };

  const mediumChangeHandler = event => {
    setMedium(event.target.value);
  };

  const smallChangeHandler = event => {
    setSmall(event.target.value);
  };

  return (
    <div className="input-box"> {/* Add a CSS class to create a box */}
      <h1>Seller Dashboard</h1>
      <input
        type="text"
        value={name}
        onChange={nameChangeHandler}
        placeholder="Name"
      />
      <input
        type="text"
        value={description}
        onChange={descriptionChangeHandler}
        placeholder="Description"
      />
      <input
        type="number"
        value={price}
        onChange={priceChangeHandler}
        placeholder="Price"
      />
      <input
        type="number"
        value={large}
        onChange={largeChangeHandler}
        placeholder="Large"
      />
      <input
        type="number"
        value={medium}
        onChange={mediumChangeHandler}
        placeholder="Medium"
      />
      <input
        type="number"
        value={small}
        onChange={smallChangeHandler}
        placeholder="Small"
      />

      {/* <Button variant="primary"  type="submit">
                    Add
                </Button> */}
      <button onClick={handleAddItem}>Add</button>

    </div>
  );
};

export default InputLayout;
