export interface ITask {
  id: string;
  title: string;
  description: string;
  dueDate: string; // format: YYYY-MM
  isCompleted: boolean;
  priority: "High" | "Medium" | "Low"; // Priority can be limited to specific values
}
