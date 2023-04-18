import Cliente from "@/core/Cliente"
import { useEffect, useState } from "react"
import ClienteRespositorio from '../core/ClienteRepositorio'
import ColecaoCliente from "@/backend/db/ColecaoCliente"
import useVisivel from "./useVisivel"
 const useClientes = () => {

    const repo: ClienteRespositorio = new ColecaoCliente()


  const [clientes, setClientes] = useState<Cliente[]>([])
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio)
  const { exibirFormulario, exibirTabela, tabelaVisivel} = useVisivel()

  useEffect(() => {obterTodos()} ,[])

  const obterTodos = () => {
    repo.obterTodos().then((clientes:Cliente[])=> {
      setClientes(clientes)
      exibirTabela()
    })
  }
  const selecionarCliente = (cliente: Cliente) => {
    setCliente(cliente)
    exibirFormulario()
  }

  const excluirCliente = async(cliente: Cliente) => {
    await repo.excluir(cliente)
    obterTodos()
  }

  const salvarCliente = async(cliente: Cliente) => {
    await repo.salvar(cliente)
    obterTodos()
  }

  const novoCliente = () => {
    setCliente(Cliente.vazio())
    exibirFormulario()
  }

  return {
    cliente,
    salvarCliente,
    novoCliente,
    excluirCliente,
    selecionarCliente,
    obterTodos,
    clientes,
    exibirTabela,
    tabelaVisivel
  }
}

export default useClientes;