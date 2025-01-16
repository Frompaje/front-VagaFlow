import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import React from 'react'

const Page = () => {
  return (
    <main className="bg-customGray font-semibold text-customGreen  grid  h-screen lg:grid-cols-2 ">
      <div className="h-screen bg-customGreen rounded-r-lg hidden lg:block"></div>

      <div className="grid lg:grid-cols-subgrid p-2">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-3xl font-extrabold">Bem-vindo de volta</h1>
          <p>
            Continue de onde parou e gerencie suas candidaturas com facilidade.
          </p>
        </div>

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
      </div>
    </main>
  )
}
export default Page
