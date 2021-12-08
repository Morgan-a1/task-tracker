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
  return (
    <div className="container">
      <Header />
      <Tasks tasks={initialTasks} />
    </div>
  );
}

export default App;
