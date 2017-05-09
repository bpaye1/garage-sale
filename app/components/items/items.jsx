import React from 'react';
import PropTypes from 'prop-types';
import Item from './item/item';

const Items = ({ items }) => {
  const renderedItems = items.map(item => (<Item item={item} />));
  return (
    <div className="gs-items">
      {renderedItems}
    </div>
  );
};

Items.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Items;