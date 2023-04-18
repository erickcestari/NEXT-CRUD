import Layout from '@/components/Layout'
import Tabela from '@/components/Tabela'
import Botao from '@/components/Botao'
import Formulario from '@/components/Formulario'
import useClientes from '@/hooks/useClientes'

export default function Home() {
  const { 
    cliente,
    clientes, 
    selecionarCliente, 
    excluirCliente, 
    salvarCliente, 
    obterTodos, 
    novoCliente,
    tabelaVisivel,
    exibirTabela
  } = useClientes()

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout titulo='Cadastro'>
        {tabelaVisivel? (
          <>
            <div className='flex justify-end'>
              <Botao onClick={novoCliente} className='mb-4' cor='green'>Novo Cliente</Botao>
            </div>
            <Tabela 
            clientes={clientes} 
            clienteExcluido={excluirCliente} 
            clienteSelecionado={selecionarCliente}></Tabela>
          </>
        ) : (
          <Formulario
          clienteMudou={salvarCliente} 
          cancelado={() => exibirTabela()} 
          cliente={cliente} />
        )}
      </Layout>
    </div>

  )
}
