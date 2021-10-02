export interface User {
  name: String,
  role: String,
  password: String,
  email: String
}

export interface Callback  {
  onSubmit: () => void
}