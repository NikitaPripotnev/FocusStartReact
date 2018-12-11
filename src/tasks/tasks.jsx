import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Task from '../task/task';
import classNames from '../core/class-names/class-names';
import createRequest from '../core/create-request';
import { fetchFood, createTask } from '../core/api-config';
import AddTask from '../addTask/addTask';

class Tasks extends Component {
  /*
  static propTypes = {
    addTask: PropTypes.func.isRequired
  }
*/
  state = {
    isLoading: true,
    tasks: []
  };

  componentDidMount() {
    createRequest(fetchFood).then(({ status, data }) => {
      if (status === 'OK') {
        this.setState({ isLoading: false, tasks: data });
        console.log(this.state.tasks, 'tasks');
      }
    });
  }

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

  addTask = (text) => {
    this.setState({ isLoading: true });

    createRequest(createTask, null, { text }).then(({ status, data }) => {
      if (status === 'OK') {
        this.setState(({ tasks }) => ({
          isLoading: false,
          tasks: tasks.concat(data)
        }));
      }
    });
  };

  render() {
    const { tasks, isLoading } = this.state;
    return (
      <div className={classNames('tasks', { loading: isLoading })}>
        {tasks.map(task => (
          <Task task={task} toggleTask={this.toggleTask} key={task.id} />
        ))}
        {!isLoading && <AddTask addTask={this.addTask} />}
      </div>
    );
  }
}

export default Tasks;
