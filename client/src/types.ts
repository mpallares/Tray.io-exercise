export interface User {
  name: String;
  role: String;
  password: String;
  email: String;
  firstCheckbox?: boolean;
  secondCheckbox?: boolean;
}
export interface Checkbox {
  firstCheckbox: Boolean;
  secondCheckbox: Boolean;
}
export interface Callback {
  onSubmit: () => void;
}
