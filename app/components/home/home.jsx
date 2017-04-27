import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { map, isEmpty } from 'lodash';
import { searchForItems } from '../../actions/items/items-action';
import selector from './home-selector';

import './home.scss';

class Home extends Component {

  componentWillMount() {
    this.props.searchForItems();
  }

  render() {
    const { items, isLoading } = this.props;
    // TODO Fix Selector to return Immutable List.
    const tempItems = !isEmpty(items) ? items.toJS() : [];

    return (
      <div className="gs-home">
        React with CSS is working,and react-hot-loader is working also!
        { isLoading && (<span>Loading Items....</span>)}
        { !isLoading && map(tempItems, item => (<div key={`item-${item.id}`}> {item.name}</div>)) }
      </div>
    );
  }
}

Home.propTypes = {  // eslint-disable-next-line react/forbid-prop-types
  items: PropTypes.any.isRequired,
  isLoading: PropTypes.bool.isRequired,
  searchForItems: PropTypes.func.isRequired
};

export default connect(selector, { searchForItems })(Home);