import FormTask from "./components/FormTask";
import TaskList from "./components/TaskList";

function App() {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center gap-10 p-10">
        <FormTask />
        <TaskList />
      </div>
    </>
  );
}

export default App;
