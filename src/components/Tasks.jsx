import PropTypes from "prop-types";

function Tasks({ tasks }) {
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
