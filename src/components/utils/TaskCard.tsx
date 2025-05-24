type TaskProps = {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  priority: "ALL" | "Heigh" | "Medium" | "Low";
};

const TaskCard = ({ task }: { task: TaskProps }) => {
  return (
    <div className="w-full border-2 border-purple-700 p-4 m-1 rounded-2xl">
      <h1 className="text-2xl font-bold">{task.title}</h1>
      <div className="pt-2">
        <p>{task.description}</p>
        <p>{task.dueDate}</p>
      </div>
    </div>
  );
};

export default TaskCard;
