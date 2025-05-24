import { Modal } from "../../components/utils/Modal";
import TaskCard from "../../components/utils/TaskCard";
import { addTask, selectTask } from "../../redux/features/task/taskSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hook";

const Task = () => {
  const tasks = useAppSelector(selectTask);
  const dispatch = useAppDispatch();

  const onSubmit = (data) => {
    dispatch(addTask(data));
  };

  console.log(tasks);
  return (
    <div>
      <div className="flex justify-between items-center gap-4">
        <h1>ALL Task</h1>
        <Modal onSubmit={onSubmit} />
      </div>
      <div className="grid gap-4 grid-cols-4">
        {tasks.map((task, idx) => (
          <TaskCard task={task} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default Task;
