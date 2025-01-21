export type LoginInput = {
  email: string
  password: string
}

export type SignupInput = {
  email: string
  password: string
  name: string
}

export type JwtPayload = {
  user: string
  token: string
}
