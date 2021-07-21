export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

export interface TaskState {
  tasks: Task[];
  editedTask: Task;
  taskCount: number;
}
