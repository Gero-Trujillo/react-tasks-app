import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function FormTask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({ title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="bg-zinc-800 rounded-md w-full max-w-lg p-4 flex flex-col gap-4"
      >
        <h2 className="text-white text-2xl">Ingresa una nueva tarea</h2>
        <input
          className="p-2 rounded-md outline-none bg-zinc-700 text-white"
          type="text"
          placeholder="Nombre de la tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <textarea
          className="p-2 rounded-md outline-none bg-zinc-700 text-white"
          placeholder="Descripcion de la tarea"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        ></textarea>
        <button className="bg-emerald-600 rounded-md p-2 hover:bg-emerald-500 text-white">Añadir</button>
      </form>
    </>
  );
}

export default FormTask;
