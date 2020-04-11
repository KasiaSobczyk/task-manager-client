import { User } from './auth.model';

export interface Task {
  id: number;
  title: string;
  description: string;
  status: string;
  user: User;
  userId: number;
}

export const enum statusType {
  open = 'OPEN',
  in_progress = 'IN_PROGRESS',
  done = 'DONE'
}
