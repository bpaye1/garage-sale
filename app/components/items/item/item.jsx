import React from 'react';
import PropTypes from 'prop-types';

import './item.scss';

const Item = ({ item }) => (
  <div className="gs-item">
    <div className="gs-item-image">
      <image src={item.images[0]} />
    </div>
    <div className="gs-item-name">
      {item.name}
    </div>
    <div className="gs-item-description">
      {item.description}
    </div>
    <div className="gs-item-price">
      {item.price.amount}
    </div>
  </div>
);

Item.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.string),
    price: PropTypes.object
  }).isRequired
};

export default Item;