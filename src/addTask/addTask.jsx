import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';

class AddTask extends Component {
  textRef = createRef();

  onSubmit = (event) => {
    const { addTask } = this.props;

    event.preventDefault();

    addTask(this.textRef.current.value);
    this.textRef.current.value = '';
  };

  render() {
    return (
      <form className="add-task" onSubmit={this.onSubmit}>
        <input type="text" className="add-task_field" name="text" ref={this.textRef} />
        <button type="submit" className="add-task_button">
          Добавить
        </button>
      </form>
    );
  }
}

export default AddTask;
