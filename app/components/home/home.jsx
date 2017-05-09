import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { searchForItems } from '../../actions/items/items-action';
import selector from './home-selector';

import './home.scss';

class Home extends Component {

  componentWillMount() {
    this.props.searchForItems();
  }

  render() {
    const { items, isLoading } = this.props;

    return (
      <div className="gs-home">
        React with CSS is working,and react-hot-loader is working also!
        { isLoading && (<span>Loading Items....</span>)}
        { !isLoading && items.map(item => (<div key={`item-${item.id}`}> {item.name}</div>)) }
      </div>
    );
  }
}

Home.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  isLoading: PropTypes.bool.isRequired,
  searchForItems: PropTypes.func.isRequired
};

export default connect(selector, { searchForItems })(Home);