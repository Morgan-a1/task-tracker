import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

const initialTasks = [
  {
    id: 1,
    text: "Task 1",
    day: "Dec 10 at 2:00 pm",
    reminder: true,
  },
  {
    id: 2,
    text: "Task 2",
    day: "Dec 12 at 5:00 pm",
    reminder: false,
  },
  {
    id: 3,
    text: "Task 3",
    day: "Dec 10 at 9:00 am",
    reminder: true,
  },
];

function App() {
  const [tasks, setTasks] = useState(initialTasks);

  function toggleReminder(id) {
    const newTasks = tasks.map((task) => (
      task.id === id ? { ...task, reminder: !task.reminder } : task
    ));

    setTasks(newTasks);
  }

  return (
    <div className="container">
      <Header />
      <Tasks onToggle={toggleReminder} tasks={tasks} />
    </div>
  );
}

export default App;
