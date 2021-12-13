import { useState, useEffect } from "react";
import AddTask from "./components/AddTask";
import EditTask from "./components/EditTask";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

// const initialTasks = [
//   {
//     id: 1,
//     text: "Task 1",
//     day: "Dec 10 at 2:00 pm",
//     reminder: true,
//   },
//   {
//     id: 2,
//     text: "Task 2",
//     day: "Dec 12 at 5:00 pm",
//     reminder: false,
//   },
//   {
//     id: 3,
//     text: "Task 3",
//     day: "Dec 10 at 9:00 am",
//     reminder: true,
//   },
// ];

function App() {
  const [tasks, setTasks] = useState([]);
  const [showAdd, setShowAdd] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showEdit, setShowEdit] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("tasks");
    console.log(data);

    if (data) {
      setTasks(JSON.parse(data));
    } else {
      setTasks([]);
    }
    setTimeout(() => setLoading(false), 100);
    //setLoading(false);
    
  }, [])

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    setShowEdit(false);
  }, [tasks]);

  
    
  function toggleReminder(id) {
    const newTasks = tasks.map((task) => (
      task.id === id ? { ...task, reminder: !task.reminder } : task
    ));

    setTasks(newTasks);
  }

  function deleteTask(id) {
    const newTask = tasks.filter((task) => task.id !== id)
    setTasks(newTask);
  }

  function addTask(task) {
    let id = 0;
    if (tasks.length > 0) {
      id = tasks[tasks.length - 1].id + 1;
    }
    const newTask = { ...task, id };
    setTasks([...tasks, newTask]);
  }/* edit task component*/

  function setEditTask(id) {
    const task = tasks.find((task) => task.id === id)

    if (task) {
      setShowAdd(false);
      setSelectedTask({...task});
      setShowEdit(true);
    }
    else {
      setShowEdit(false);
    }
  }

  function editTask(task) {
    const newTasks = tasks.map((t) =>
      t.id === task.id ? { ...t, ...task } : t
    );
    setTasks(newTasks);
    setShowEdit(false);
  }

  function toggleAdd() {
    if (!showAdd) {
      setShowEdit(false);
    }
    setShowAdd(!showAdd);
  }

  if (loading) {
    return <p className="loading">Loading tasks...</p>;
  }

  return (
    <div className="container">
      <Header onAdd={toggleAdd} showAdd={showAdd} />
      {showAdd && <AddTask onSubmit={addTask} />}
      {showEdit && (<EditTask
        task={selectedTask}
        onSubmit={editTask}
        onCancel={() => setShowEdit(false)} />)}
      <Tasks
        onEdit={setEditTask}
        onToggle={toggleReminder}
        onDelete={deleteTask}
        tasks={tasks} /> 
    </div>
  );
}

export default App;
