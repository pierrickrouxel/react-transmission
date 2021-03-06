import React, { Component} from 'react';

class Item extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

Item.propTypes = {
  id: React.PropTypes.number.isRequired,
  children: React.PropTypes.element.isRequired,
};

export default Item;
