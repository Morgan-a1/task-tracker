import PropTypes from "prop-types";
import Task from "./Task"

function Tasks({ tasks, onToggle, onDelete, onEdit }) {
   if (!tasks || tasks.length === 0) {
      return <p>No tasks to display</p>;
   }
   
   return tasks.map((task) => <Task onEdit={onEdit} onToggle={onToggle} onDelete={onDelete} key={task.id} task={task} />);
}

Tasks.defaultProps = {
   tasks: [],
};

Tasks.propTupes = {
   tasks: PropTypes.array,
   onToggle: PropTypes.func.isRequired,
   onDelete: PropTypes.func.isRequired,
   onEdit: PropTypes.func.isRequired,
};

export default Tasks;
