import { Task } from 'src/app/tasks/models/task.model';

export interface User {
  id: number;
  username: string;
  password: string;
  salt: string;
  roles: string;
  tasks: Task[];
}

export enum RolesType {
  ADMIN = 'admin',
  USER = 'user'
}
