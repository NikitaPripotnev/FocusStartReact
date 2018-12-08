import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Task extends PureComponent {
  /*
  shouldComponentUpdate(nextProps) {
    const { isCompleted } = this.props.task;

    return nextProps.task.isCompleted !== isCompleted;
  }
  */
  render() {
    const { task, toggleTask } = this.props;
    console.log(`render-task-${task.id}`);
    return (
      <div
        className={`task ${task.isCompleted ? 'task__completed' : ''}`}
        onClick={toggleTask}
        data-id={task.id}
      >
        {task.text}
      </div>
    );
  }
}

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    isCompleted: PropTypes.bool
  }).isRequired,
  toggleTask: PropTypes.func
};

export default Task;
