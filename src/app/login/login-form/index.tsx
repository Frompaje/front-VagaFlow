import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'

export const LoginForm = () => {
  return (
    <div className="flex flex-col items-center gap-2  p-2">
      <div className="w-4/5 lg:w-3/5 flex flex-col gap-2 ">
        <Input placeholder="example@email.com" />
        <Input placeholder="*********" />
        <Link className="text-black underline  text-end" href={'/'}>
          Esqueci minha senha
        </Link>
      </div>
      <Button className="w-4/5 lg:w-3/5">Login</Button>

      <div className="flex gap-1">
        <span>Ainda não tem conta?</span>
        <Link className="text-black underline" href={'/'}>
          Cadastre-se agora
        </Link>
      </div>
    </div>
  )
}
