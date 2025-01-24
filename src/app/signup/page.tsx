'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { SignupInput } from '@/helpers/types/user'
import {
  RegisterFormSchema,
  registerFormSchema,
} from '@/helpers/types/userSchema'
import { UserService } from '@/service/user'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { Loader2 } from 'lucide-react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

const Page = () => {
  const router = useRouter()

  const { mutate, isPending } = useMutation({
    mutationFn: UserService.signup,
    onSuccess() {
      toast.success('Usuário criado com sucesso')
      reset()
      setTimeout(() => {
        router.push(`/login`)
      }, 1000)
    },
    onError() {
      toast.error('Credenciais inválidas')
    },
  })

  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm<RegisterFormSchema>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  })

  function handleSubmitSignup(data: SignupInput) {
    mutate(data)
  }

  return (
    <div>
      <div className="text-center ">
        <h1 className="text-3xl font-extrabold mb-5">Cadastre-se</h1>
        <p>
          Ao se cadastrar, você terá acesso a um painel completo para gerenciar
          suas candidaturas de emprego. Controle suas inscrições, acompanhe o
          progresso das vagas e aproveite ferramentas que tornam o processo de
          busca por oportunidades mais simples e eficiente.
        </p>
      </div>

      <form onSubmit={handleSubmit(handleSubmitSignup)}>
        <div className="p-4">
          <label htmlFor="name">Digite seu nome</label>
          <Input {...register('name')} />
          <label htmlFor="email">Email</label>
          <Input {...register('email')} />
          <label htmlFor="password">Password</label>
          <Input type="password" {...register('password')} />

          <div className="flex flex-col">
            <Link
              className="text-black underline hover:text-neutral-900"
              href={'/login'}
            >
              Voltar para o login
            </Link>

            <Button
              className="bg-black text-white w-full lg:w-3/5 hover:bg-neutral-900"
              disabled={isPending || !isValid}
            >
              {isPending ? (
                <Loader2 className="ml-2 animate-spin" />
              ) : (
                ' Fazer o cadastro agora'
              )}
            </Button>
          </div>
        </div>
      </form>
    </div>
  )
}
export default Page
