import React from "react";
import Title from "./Title";
import AddReminder from "./AddReminder";
import Reminders from "./Reminders";
import { Link } from "react-router-dom";
import {
  collection,
  query,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../firebase";

const HomePage = () => {
  const [reminders, setReminder] = React.useState([]);

  React.useEffect(() => {
    const q = query(collection(db, "reminders"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let remArray = [];
      querySnapshot.forEach((doc) => {
        remArray.push({ ...doc.data(), id: doc.id });
      });
      setReminder(remArray);
    });
    return () => unsub();
  }, []);

  const handleEdit = async (reminder, title, clock) => {
    await updateDoc(doc(db, "reminders", reminder.id), { title: title }, {clock: clock});
  };
  const toggleComplete = async (reminder) => {
    await updateDoc(doc(db, "reminders", reminder.id), { completed: !reminder.completed });
  };
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "reminders", id));
  };
  return (
    <div className="App">
      <div>
        <Title />
      </div>
      <div>
        <AddReminder />
      </div>
      <div className="todo_container">
        {reminders.map((rem) => (
          <Reminders
            key={rem.id}
            reminder={rem}
            toggleComplete={toggleComplete}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        ))}
      </div>
      <Link to='/'> 
      <button>SignOut</button></Link>
    </div>
  );
}
export default HomePage;