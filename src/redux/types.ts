export interface ITask {
  id: string;
  title: string;
  description: string;
  isCompleted: boolean;
  priority: "Heigh" | "Low" | "Medium";
}
