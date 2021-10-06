export interface User {
  name: string;
  role: string;
  password: string;
  email: string;
}
export interface Checkbox {
  firstCheckbox: Boolean;
  secondCheckbox: Boolean;
}

export interface Errors {
  name?: string;
  role?: string;
  email?: String;
  password?: String;
}

export type Page = String
// 
export interface Callback {
  onSubmit: () => void;
}
