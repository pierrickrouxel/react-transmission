import React, { Component } from 'react';
import { themr } from 'react-css-themr';

@themr('ContextMenu')
class Menu extends Component {
  render() {
    const { theme, children, style } = this.props;
    return (
      <div className={theme.menuOuter} style={style}>
        <div className={theme.menuInner}>
          {children}
        </div>
      </div>
    );
  }
}

export default Menu;
