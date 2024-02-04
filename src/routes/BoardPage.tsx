import { useEffect, useState } from "react";
import { db } from "../config/firebase";
import { collection, getDocs } from "firebase/firestore";
import { Todo } from "../models/todo";

const BoardPage: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>();

  useEffect(() => {
    const getTodos = async () => {
      try {
        const data = await getDocs(collection(db, "todos"));
        const dataList = data.docs.map((doc: any) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setTodos(dataList);
      } catch (error) {
        console.error(error);
      }
    };
    getTodos();
  }, []);
console.log(todos);

  return (
    <>
      <div>
        <input type="text" /> <button>Add Task</button>
      </div>

      <section>
        {todos?.map((todo) => {
          return (
            <div key={todo.id}>
              <h2>{todo.title}</h2>
              <p>{todo.description}</p>
              <div>
                <b>Due date: </b>
                {todo.dueDate.toDate().toDateString()}
              </div>
              <div>
                <b>Priority: </b>
                {todo.priority}
              </div>
              <div>
                <b>Assigned to: </b>
                <ul>
                  {todo.assignedTo.map((person, i) => {
                    return <li key={i}>{person}</li>;
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default BoardPage;
