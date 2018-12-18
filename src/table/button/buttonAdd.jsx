import React, { PureComponent } from 'react';
import { Route } from 'react-router-dom';

class ButtonAdd extends PureComponent {
  onClick = () => {
    const { someFunction, id } = this.props;
    someFunction(id);
  };

  render() {
    const { title } = this.props;
    return (
      <button className="button button_icon button_icon_add" type="button" onClick={this.onClick}>
        {title}
      </button>
    );
  }
}

export default ButtonAdd;
