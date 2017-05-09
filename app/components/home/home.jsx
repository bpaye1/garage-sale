import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { searchForItems } from '../../state/items/items-action';
import selector from './home-selector';
import Items from '../items/items';

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
        { !isLoading && <Items items={items} /> }
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