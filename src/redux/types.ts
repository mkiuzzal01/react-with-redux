export interface ITask {
  id: string;
  title: string;
  description: string;
  dueDate: Date;
  isCompleted: boolean;
  priority: "Heigh" | "Low" | "Medium";
  assignedUser: string | null;
}

export interface IUser {
  id: string;
  name: string;
  isDeleted: boolean;
}
