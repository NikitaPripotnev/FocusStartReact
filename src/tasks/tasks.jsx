import React from 'react';
import Task from '../task/task';

const tasks = [
  { id: '1', text: 'React', isCompleted: true },
  { id: '2', text: 'Props', isCompleted: true },
  { id: '3', text: 'State', isCompleted: false },
  { id: '4', text: 'Yesteday', isCompleted: true },
  { id: '5', text: 'ufuf', isCompleted: false },
  { id: '6', text: 'hello', isCompleted: true }
];

function Tasks() {
  return (
    <div className="tasks">
      {tasks.map(data => (
        <Task data={data} key={data.id} />
      ))}
    </div>
  );
}

export default Tasks;
