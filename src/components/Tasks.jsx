import PropTypes from "prop-types";

function Tasks({ tasks }) {
   if (!tasks || tasks.length === 0) {
      return <p>No tasks to display</p>;
   }
   
   return tasks.map((task) => (
      <p key={task.id}>{task.text}</p>
   ));
}

Tasks.defaultProps = {
   tasks: [],
};

Tasks.propTupes = {
   tasks: PropTypes.array,
};

export default Tasks;
