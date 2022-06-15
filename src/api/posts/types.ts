import { User } from 'firebase/auth';

export interface IPosts {
  author: User;
  createdAt: string;
  content: string;
  images?: string[];
}
