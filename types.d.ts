export interface UserData {
  id: number;
  username: string;
  name: string;
  email: string;
  verified: boolean;
  tasks: Task[];
}

export interface UserError {
  message: string;
  // Añadir más campos según sea necesario
}
