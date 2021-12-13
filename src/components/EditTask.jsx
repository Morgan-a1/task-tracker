import PropTypes from "prop-types";
import { useState, useEffect } from "react";
//import { useState, useEffect } from "react/cjs/react.development"
import Button from "./Button";

function EditTask({ onSubmit, task, onCancel }) {
   const [text, setText] = useState("");
   const [day, setDay] = useState("");
   const [reminder, setReminder] = useState(false);

   useEffect(() => {
      setText(task.text);
      setDay(task.day);
      setReminder(task.reminder);
   }, [task]);

   function handleSubmit(e){
      e.preventDefault();
      if (!text) {
         return alert("Please enter a task");
      }
      onSubmit({ ...task, text, day, reminder });
   }

   return (
      <form className="add-form" onSubmit={handleSubmit}>
         <div className="form-control">
            <label htmlFor="text">Task</label>
            <input
               type="text"
               id="text"
               name="text"
               placeholder="Add Task"
               value={text}
               onChange={(e) => setText(e.target.value)} />
         </div>
         <div className="form-control">
            <label htmlFor="day">Day and Time</label>
            <input type="text" id="day" name="day" placeholder="Add Day & Time" value={day} onChange={(e) => setDay(e.target.value)} />
         </div>
         <div className="form-control form-control-check">
            <label htmlFor="reminder">Set Reminder</label>
            <input 
               type="checkbox"
               id="reminder"
               name="reminder"
               checked={reminder}
               onChange={(e) => setReminder(e.target.checked)} />
         </div>
         <Button block color="black" type="submit">
            Save Task
         </Button>
         <Button block color="red" onClick={onCancel}>
            Cancel
         </Button>
      </form>
   );
}

EditTask.propTypes = {
   onSubmit: PropTypes.func.isRequired,
   onCancel: PropTypes.func.isRequired,
   task: PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      day: PropTypes.string,
      reminder: PropTypes.bool.isRequired,
   }),
};

export default EditTask;
