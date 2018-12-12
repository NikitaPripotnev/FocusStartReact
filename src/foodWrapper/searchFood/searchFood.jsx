import React, { PureComponent, createRef } from 'react';
import PropTypes from 'prop-types';

class SearchFood extends PureComponent {
  textRef = createRef();

  onSubmit = (event) => {
    const { changeData } = this.props;

    event.preventDefault();

    changeData(this.textRef.current.value);
    this.textRef.current.value = '';
  };

  render() {
    return (
      <form className="add-task" onSubmit={this.onSubmit}>
        <input type="text" className="input input_search" name="text" ref={this.textRef} />
        <button type="submit" className="add-task_button">
          Поиск
        </button>
      </form>
    );
  }
}

export default SearchFood;
