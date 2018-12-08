import React, { Component } from 'react';
import Task from '../task/task';

class Tasks extends Component {
  state = {
    tasks: [
      { id: '1', text: 'React', isCompleted: true },
      { id: '2', text: 'Props', isCompleted: true },
      { id: '3', text: 'State', isCompleted: false },
      { id: '4', text: 'Yesteday', isCompleted: true },
      { id: '5', text: 'ufuf', isCompleted: false },
      { id: '6', text: 'hello', isCompleted: true }
    ]
  };

  toggleTask = (event) => {
    const { id } = event.currentTarget.dataset;

    console.log(`update task-${id}`);

    this.setState(state => ({
      tasks: state.tasks.map((task) => {
        if (task.id === id) {
          return { ...task, isCompleted: !task.isCompleted };
        }
        return task;
      })
    }));
  };

  render() {
    const { tasks } = this.state;
    return (
      <div className="tasks">
        {tasks.map(task => (
          <Task task={task} toggleTask={this.toggleTask} key={task.id} />
        ))}
      </div>
    );
  }
}

export default Tasks;
