export interface ITask {
  id: string;
  title: string;
  description: string;
  dueDate: Date;
  isCompleted: boolean;
  priority: "Heigh" | "Low" | "Medium";
}
