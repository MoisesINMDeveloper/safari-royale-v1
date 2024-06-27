export interface UserData {
  id: number;
  username: string;
  name: string | null;
  email: string;
  dni: string | number | null;
  phone: number | string | null;
  verified: boolean;
  bankName: string | null;
  phoneCode: number | string | null;
  balance: number;
  role: string;
}

export interface UserError {
  message: string;
  // Añadir más campos según sea necesario
}
