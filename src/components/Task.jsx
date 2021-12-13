import PropTypes from "prop-types";
import { FaTimes, FaEdit } from "react-icons/fa";

function Task({ task, onToggle, onDelete, onEdit }) {
   const containerClasses = "task " + (task.reminder ? "reminder" : "");

   return (
      <div onDoubleClick={() => onToggle(task.id)} className={containerClasses}>
         <h3>
            {task.text}
            <span>
               <FaEdit onClick={() => onEdit(task.id)} style={{ marginRight: 4 }} />
            <FaTimes
               onClick={() => onDelete(task.id)}
               style={{ color: "red", cursor: "pointer" }} />
            </span>
         </h3>
         <p>{task.day}</p>
      </div>
   );
}

Task.propTypes = {
   task: PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      day: PropTypes.string.isRequired,
      reminder: PropTypes.bool.isRequired,
   }).isRequired,
   onToggle: PropTypes.func.isRequired,
   onDelete: PropTypes.func.isRequired,
   onEdit: PropTypes.func.isRequired,
};

export default Task;
