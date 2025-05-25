import { TabsList } from "@radix-ui/react-tabs";
import { Tabs, TabsTrigger } from "../../components/ui/tabs";
import TaskCard from "../../components/utils/TaskCard";
import {
  addTask,
  selectTask,
  updateFilter,
} from "../../redux/features/task/taskSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { AddTaskModal } from "../../components/utils/AddTaskModal";
import { selectUsers } from "../../redux/features/users/userSlice";

const Task = () => {

  const tasks = useAppSelector(selectTask);
  const users = useAppSelector(selectUsers);
  const dispatch = useAppDispatch();

  const onSubmit = (data:any) => {
    dispatch(addTask(data));
  };

  return (
    <div>
      <div className="flex justify-between items-center gap-4">
        <h1>ALL Task</h1>

        <div className="flex gap-3 items-center">
          <Tabs defaultValue="ALL" className="w-full">
            <TabsList>
              <TabsTrigger
                onClick={() => dispatch(updateFilter("ALL"))}
                value="ALL"
              >
                ALL
              </TabsTrigger>
              <TabsTrigger
                onClick={() => dispatch(updateFilter("Medium"))}
                value="Low"
              >
                Medium
              </TabsTrigger>
              <TabsTrigger
                onClick={() => dispatch(updateFilter("Low"))}
                value="Low"
              >
                Low
              </TabsTrigger>
              <TabsTrigger
                onClick={() => dispatch(updateFilter("Heigh"))}
                value="Heigh"
              >
                Heigh
              </TabsTrigger>
            </TabsList>
          </Tabs>
          <AddTaskModal
            users={users}
            onSubmit={onSubmit}
          />
        </div>
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
