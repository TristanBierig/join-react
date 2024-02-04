import { Timestamp } from "firebase/firestore";

export class Todo {
  id: string;
  title: string;
  description: string;
  category: string;
  priority: string;
  dueDate: Timestamp;
  assignedTo: string[];
  subtasks: string[];

  constructor(data) {
    this.id = data.id || "";
    this.title = data.title || "";
    this.description = data.description || "";
    this.category = data.category || "";
    this.priority = data.priority || "";
    this.dueDate = data.dueDate || "";
    this.assignedTo = data.assignedTo || [];
    this.subtasks = data.subtasks || [];
  }
}
