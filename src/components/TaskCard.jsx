import { TaskContext } from "../context/TaskContext";
import { useContext, useState } from "react";

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);
  const [estado, setEstado] = useState(false);
  const toggleCompleted = () => {
    setEstado(!estado);
  };
  return (
    <div>
      <div className="bg-zinc-700 p-4 rounded-md max-w-96 w-96 flex flex-col gap-4 text-white">
        <h1 className="text-2xl">{task.title}</h1>
        <h2 className="text-lg text-zinc-400">{task.description}</h2>
        {estado ? <p className="flex gap-2"><div className="bg-emerald-500 w-6 h-6 rounded-full cursor-pointer hover:scale-110" onClick={toggleCompleted}></div>Completada</p>: <p className="flex gap-2"><div className="bg-yellow-500 w-6 h-6 rounded-full cursor-pointer hover:scale-110" onClick={toggleCompleted}></div>Pendiente</p>}
        <button
          className="bg-red-600 hover:bg-red-500 rounded-md p-2"
          onClick={() => deleteTask(task.id)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
