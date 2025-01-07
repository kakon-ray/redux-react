export interface ITask {
  id: string;
  title: string;
  description: string;
  dueDate: string; // format: YYYY-MM
  isCompleted: boolean;
  assignTo: string | null;
  priority: "heigh" | "medium" | "low" | "all"; // Priority can be limited to specific values
}
export interface IUser {
  id: string;
  name: string;
}
