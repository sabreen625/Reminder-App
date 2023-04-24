import React from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

export default function AddReminder() {
  const [title, setTitle] = React.useState("");
  const [clock, setClock] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title !== "" && clock !== "") {
      await addDoc(collection(db, "reminders"), {
        title,
        clock,
        completed: false,
      });
      setTitle("");
      setClock("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="input_container">
        <input
          type="text"
          placeholder="Enter Reminder..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
         <input
              type="datetime-local"
              placeholder="Enter Date And Time"
              value={clock}
              onChange = {e => setClock(e.target.value)}
            />
      </div>
      <div className="btn_container">
        <button>Add</button>
      </div>
    </form>
  );
}