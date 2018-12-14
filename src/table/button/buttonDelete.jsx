import React, { PureComponent } from 'react';
import createRequest from '../../core/create-request';

class ButtonDelete extends PureComponent {
  onClick = () => {
    const { id, request } = this.props;
    createRequest(
      request,
      { id },
      null
    ).then(({ status }) => {
      if (status === 'OK') {
        console.log('DELETE status - OK');
      } else {
        console.log('DELETE status - BAD');
      }
    });
  };

  render() {
    const { title } = this.props;
    return (
      <button className="button button_icon button_icon_delete" type="button" onClick={this.onClick}>
        {title}
      </button>
    );
  }
}

export default ButtonDelete;
