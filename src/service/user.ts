import { api } from '@/lib/axios'
import { JwtPayload, LoginInput, SignupInput } from '@/helpers/types/user'

export class UserService {
  static async login(data: LoginInput) {
    console.log(data)
    const response = await api.post<JwtPayload>('/user/signIn', data)
    return response.data
  }

  static async signup(data: SignupInput) {
    const response = await api.post('user/signUp', data)
    return response.data
  }
}
