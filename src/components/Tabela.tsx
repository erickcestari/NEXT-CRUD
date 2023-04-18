import Cliente from '@/core/Cliente'
import React from 'react'
import { IconeEdicao, IconeLixo } from './Icones'

interface TabelaProps {
    clientes: Cliente[]
    clienteSelecionado?: (cliente:Cliente) => void
    clienteExcluido?: (cliente:Cliente) => void
}

const Tabela = (props: TabelaProps) => {

    const exibirAcoes = props.clienteExcluido || props.clienteSelecionado

    const renderizarCabecalho = () => {
        return(
            <tr>
                <th className='text-left p-4'>Código</th>
                <th className='text-left p-4'>Nome</th>
                <th className='text-left p-4'>Idade</th>
                {exibirAcoes && <th className='p-4'>Ações</th>}
            </tr>
        )
    }

    const renderizarAcoes = (cliente: Cliente) => {
        return(
            <td className='flex justify-around'>
                {props.clienteSelecionado && 
                    <button 
                    onClick={() => props.clienteSelecionado?.(cliente)}
                    className={`flex justify-center
                    items-center text-green-600 rounded-full p-2 m-1
                    hover:bg-purple-50
                    `}>
                        {IconeEdicao}
                    </button>
                }

                {props.clienteExcluido && 
                    <button 
                    onClick={() => props.clienteExcluido?.(cliente)}
                    className={`flex justify-center
                    items-center text-red-600 rounded-full p-2 m-1
                    hover:bg-purple-50
                    `}>{IconeLixo}</button>
                }
                
                
            </td>
        )
    }

    const renderizarDados = () => {
        return props.clientes?.map((cliente, i) => {
            return(
                <tr key={cliente.id} className={`${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}>
                    <td className='text-left p-4 font-bold'>{cliente.id}</td>
                    <td className='text-left p-4 font-bold'>{cliente.nome}</td>
                    <td className='text-left p-4 font-bold'>{cliente.idade}</td>
                    {exibirAcoes && renderizarAcoes(cliente)}
                </tr>
            )
        })
    }

  return (
    <table className={`w-full rounded-xl overflow-hidden`}>
        <thead className={`
            bg-gradient-to-r from-purple-500 to-purple-800
            text-gray-100
        `}>
            {renderizarCabecalho()}
        </thead>
        <tbody>
            {renderizarDados()}
        </tbody>
    </table>
  )
}

export default Tabela