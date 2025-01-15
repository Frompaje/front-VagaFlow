import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import React from 'react'

const Page = () => {
  return (
    <main className="bg-customGray h-screen font-semibold text-customGreen p-2">
      <div className="text-center mt-52">
        <h1 className="text-3xl font-extrabold">Bem-vindo de volta</h1>
        <p>
          Continue de onde parou e gerencie suas candidaturas com facilidade.
        </p>
      </div>

      <div className="mt-10 flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <Input placeholder="example@email.com" />
          <Input placeholder="*********" />
          <Link className="text-black underline  text-end" href={'/'}>
            Esqueci minha senha
          </Link>
        </div>
        <Button className="w-full">Login</Button>

        <div className="flex gap-1">
          <span>Ainda não tem conta?</span>
          <Link className="text-black underline" href={'/'}>
            Cadastre-se agora
          </Link>
        </div>
      </div>
    </main>
  )
}
export default Page
