import { LoginForm } from '@/app/login/login-form'
import React from 'react'

const Page = () => {
  return (
    <main className="font-semibold text-customGreen  grid  h-screen lg:grid-cols-2 ">
      <div className="h-screen bg-black rounded-r-xl hidden lg:block"></div>

      <div className="bg-white grid lg:grid-cols-subgrid p-2">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-3xl font-extrabold">Bem-vindo de volta</h1>
          <p>
            Continue de onde parou e gerencie suas candidaturas com facilidade.
          </p>
        </div>

        <LoginForm />
      </div>
    </main>
  )
}
export default Page
