import React, { PureComponent } from 'react';
import { Route } from 'react-router-dom';

class ButtonEdit extends PureComponent {
  render() {
    const { title, id } = this.props;
    return (
      <Route
        render={({ history }) => (
          <button
            className="button button_icon button_icon_edit"
            type="button"
            onClick={() => {
              history.push(`/editFood/${id}`);
            }}
          >
            {title}
          </button>
        )}
      />
    );
  }
}

export default ButtonEdit;
