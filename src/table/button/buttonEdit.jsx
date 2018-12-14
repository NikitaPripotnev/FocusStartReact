import React, { PureComponent } from 'react';

class ButtonEdit extends PureComponent {
  onClick = () => {
    console.log('PATCH in developing');
  };

  render() {
    const { title } = this.props;
    return (
      <button className="button button_icon button_icon_edit" type="button" onClick={this.onClick}>
        {title}
      </button>
    );
  }
}

export default ButtonEdit;
