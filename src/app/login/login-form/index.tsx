'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { UserService } from '@/service/user'
import { useMutation } from '@tanstack/react-query'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { LoginFormSchema, loginFormSchema } from '@/helpers/types/userSchema'
import { LoginInput } from '@/helpers/types/user'
import { Loader2 } from 'lucide-react'
import { toast } from 'sonner'

export const LoginForm = () => {
  const { mutate, isPending } = useMutation({
    mutationFn: UserService.login,
    onSuccess() {
      toast.success('Logado com sucesso!')
    },
    onError() {
      toast.error('Credenciais inválidas')
    },
  })

  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<LoginFormSchema>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  function handleSubmitLogin(data: LoginInput) {
    mutate(data)
  }

  return (
    <form onSubmit={handleSubmit(handleSubmitLogin)}>
      <div className="flex flex-col items-center gap-2  p-2">
        <div className="w-4/5 lg:w-3/5 flex flex-col gap-2 ">
          <label htmlFor="email">Email</label>
          <Input placeholder="example@email.com" {...register('email')} />
          <label htmlFor="passowrd">Password</label>
          <Input
            type="password"
            placeholder="*********"
            {...register('password')}
          />
        </div>

        <Button
          className="bg-black text-white w-4/5 lg:w-3/5 hover:bg-neutral-900"
          disabled={isPending || !isValid}
        >
          {isPending ? <Loader2 className="ml-2 animate-spin" /> : 'Login'}
        </Button>

        <div className="flex gap-1">
          <span>Ainda não tem conta?</span>
          <Link
            className="text-black underline hover:text-neutral-900"
            href={'/signup'}
          >
            Cadastre-se agora
          </Link>
        </div>
      </div>
    </form>
  )
}
