import { UUID } from "crypto";

export interface SignupData {
  firstName: string;
  lastName: string;
  password: string;
  email: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface Arts {
  id: number;
  created_at: string;
  userId: number;
  name: string;
  image: string;
  description: string;
  category: string;
  price: number;
  authUsers: {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    avatar: string;
    authUserId: UUID;
  };
}

export interface Art {
  userId: number | undefined | null;
  image: File;
  description: string;
  category: string;
  price: number;
  name: string;
}
