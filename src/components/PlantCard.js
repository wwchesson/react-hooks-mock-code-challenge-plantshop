import React, {useState} from "react";

function PlantCard({plant}) {
  const {name, image, price} = plant
  const [stock, setStock] = useState(true)

  function handleStockClick() {
    setStock(stock => !stock)
  }


  return (
    <li className="card">
      <img src={image} alt={"plant name"} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {stock ? (
        <button className="primary" onClick={handleStockClick}>In Stock</button>
      ) : (
        <button onClick={handleStockClick}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
