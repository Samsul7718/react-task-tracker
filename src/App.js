import Header from './components/Header';
import { useState } from 'react';
import Tasks from './components/Tasks';
import Task from './components/Task';
import AddTask from './components/AddTask';
function App() {
  const [showAddTask, setshowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'doctor appointment',
      day: 'feb 6th at 2:30pm',
      remiender: 'true',
    },
    {
      id: 2,
      text: 'meeting at school',
      day: 'feb 8th at 2:30pm',
      remiender: 'true',
    },
    {
      id: 3,
      text: 'food shopping',
      day: 'feb 10th at 2:30pm',
      remiender: 'false',
    },
  ]);

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };
  // delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  // toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, remiender: !Task.remiender } : task
      )
    );
  };
  return (
    <div className="container">
      <Header
        onAdd={() => setshowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        'No Task To Show'
      )}
    </div>
  );
}

export default App;
