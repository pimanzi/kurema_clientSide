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
}
