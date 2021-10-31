import React from "react";

const ReviewItem = (service) => {
  const { name, price, _id } = service;
  const { handleRemove } = service;
  return (
    <div>
      <div className="product">
        <div>
          <h4 className="product-name">{name}</h4>
          <p>Price: {price}</p>
          <button onClick={() => handleRemove(_id)} className="btn-regular">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
