import React, { PureComponent } from 'react';
import { Route } from 'react-router-dom';

class ButtonEdit extends PureComponent {
  render() {
    const { title, path } = this.props;
    return (
      <Route
        render={({ history }) => (
          <button
            className="button button_icon button_icon_edit"
            type="button"
            onClick={() => {
              history.push(path);
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
