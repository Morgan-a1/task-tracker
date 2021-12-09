import PropTypes from "prop-types";
import Task from "./Task"

function Tasks({ tasks }) {
   if (!tasks || tasks.length === 0) {
      return <p>No tasks to display</p>;
   }
   
   return tasks.map((task) => <Task key={task.id} task={task} />);
}

Tasks.defaultProps = {
   tasks: [],
};

Tasks.propTupes = {
   tasks: PropTypes.array,
};

export default Tasks;
