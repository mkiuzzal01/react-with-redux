import { Modal } from "../../components/utils/Modal";
import TaskCard from "../../components/utils/TaskCard";
import { selectTask } from "../../redux/features/task/taskSlice";
import { useAppSelector } from "../../redux/hook";

const Task = () => {
  const tasks = useAppSelector(selectTask);

  return (
    <div>
      <div className="flex justify-between items-center gap-4">
        <h1>ALL Task</h1>
        <Modal />
      </div>
      <div className="grid gap-4 grid-cols-4">
        {tasks.map((task) => (
          <TaskCard task={task} key={task.id} />
        ))}
      </div>
    </div>
  );
};

export default Task;
