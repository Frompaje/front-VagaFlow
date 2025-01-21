import { Button } from '@/components/ui/button'
import { Header } from '@/pages/header'

export default function Home() {
  return (
    <main className="h-screen text-black font-semibold flex flex-col p-2">
      <Header />
      <div className="flex justify-center">
        <h1 className="text-3xl font-extrabold max-w-96 text-center">
          Controle suas inscrições e acompanhe seu progresso de forma eficiente
        </h1>
      </div>
      <p className="text-wrap text-xl ">
        O <span className="font-bold">Workflow</span> foi desenvolvido para
        candidatos que desejam ter um controle completo sobre suas inscrições em
        vagas de emprego. Com ele, você pode acompanhar de forma clara e precisa
        o status de todas as suas candidaturas.
      </p>
      <Button className="bg-white border-1 rounded-lg cursor-pointer hover:text-white transition ease-in-out duration-300 p-2">
        Criar conta
      </Button>
    </main>
  )
}
