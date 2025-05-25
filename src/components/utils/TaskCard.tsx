import { Edit, Trash2 } from "lucide-react";
import type { ITask } from "../../redux/types";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { cn } from "../../lib/utils";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import {
  deleteTask,
  toggleCompleteState,
} from "../../redux/features/task/taskSlice";
import { selectUsers } from "../../redux/features/users/userSlice";

interface TaskProps {
  task: ITask;
}

const TaskCard = ({ task }: TaskProps) => {
  const dispatch = useAppDispatch();
  const users = useAppSelector(selectUsers);

  const user = users.find((user) => user.id === task.assignedUser);

  return (
    <div className="w-full border-2 border-purple-700 p-4 m-1 rounded-2xl">
      <div className="flex items-center gap-4">
        <div
          className={cn("size-3 rounded-full", {
            "bg-green-500": task.priority === "Low",
            "bg-orange-400": task.priority === "Medium",
            "bg-red-500": task.priority === "Heigh",
          })}
        ></div>
        <h1 className="text-2xl font-bold">{task.title}</h1>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <p>{task.description}</p>
          <p>{new Date(task.dueDate).toLocaleString()}</p>
          <div>
            <h3 className="text-purple-500">{user ? user.name : "No one"}</h3>
          </div>
        </div>
        <div>
          <Button onClick={() => dispatch(deleteTask(task.id))} variant="link">
            <Edit color="blue" />
          </Button>
          <Button onClick={() => dispatch(deleteTask(task.id))} variant="link">
            <Trash2 color="red" />
          </Button>
          <Checkbox onClick={() => dispatch(toggleCompleteState(task.id))} />
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
