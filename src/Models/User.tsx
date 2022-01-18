export default class User {
  id: number;
  username: string;
  password: string;
  passwordconfirm: string;
  firstName: string;
  photoPath: string;
  birthDate: Date;
  address: string;
  isOwner: boolean;
  role: string;
  token: string;
}