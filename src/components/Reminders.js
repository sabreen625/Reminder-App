import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Reminders({ reminder, toggleComplete, handleDelete, handleEdit,}) {
  const [newTitle, setNewTitle] = React.useState(reminder.title);
  const [newClock, setNewClock] = React.useState(reminder.clock);

  const handleChange = (e) => {
    e.preventDefault();
    if (reminder.complete === true) {
      setNewTitle(reminder.title);
      setNewClock(reminder.clock);
    } else {
      reminder.title = "";
      reminder.clock ="";
      setNewTitle(e.target.value);
      setNewClock(e.target.value);
    }
  };
  return (
    <div className="todo">
      <input
        style={{ textDecoration: reminder.completed && "line-through" }}
        type="text"
        value={reminder.title === "" ? newTitle : reminder.title}
        className="list"
        onChange={handleChange}
      />
      <input
        style={{ textDecoration: reminder.completed && "line-through" }}
        type="text"
        value={reminder.clock === "" ? newClock : reminder.clock}
        className="list"
        onChange={handleChange}
      />

      <div>
        <button
          className="button-complete"
          onClick={() => toggleComplete(reminder)}
        >
          <CheckCircleIcon id="i" />
        </button>
        <button
          className="button-edit"
          onClick={() => handleEdit(reminder, newTitle)}
        >
          <EditIcon id="i" />
        </button>
        <button className="button-delete" onClick={() => handleDelete(reminder.id)}>
          <DeleteIcon id="i" />
        </button>
      </div>
    </div>
  );
}