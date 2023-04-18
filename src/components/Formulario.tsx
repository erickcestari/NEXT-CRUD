import React, { useState } from 'react'
import Entrada from './Entrada'
import { unstable_createNodejsStream } from 'next/dist/compiled/@vercel/og'
import Cliente from '@/core/Cliente'
import Botao from './Botao'

interface FormularioProps {
    cliente: Cliente
    cancelado?: () => void
    clienteMudou?: (cliente: Cliente) => void
}

const Formulario = (props:FormularioProps) => {
    const id = props.cliente?.id
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0)
  return (
    <div>
        {id && <Entrada somenteLeitura valor={id} texto="Código" className='mb-5'/>}

        <Entrada 
        valor={nome} 
        texto="Nome" 
        valorMudou={setNome}
        className='mb-5'
        />
        
        <Entrada valor={idade} tipo='number' texto="Idade" valorMudou={setIdade}/>
        <div className='flex justify-end mt-7'>
            <Botao onClick={() => props.clienteMudou?.(new Cliente(nome, Number(idade), id))} cor='blue' className='mr-2'>{id ? 'Alterar' : 'Salvar'} </Botao>
            <Botao onClick={props.cancelado}>Cancelar</Botao>
        </div>
    </div>
  )
}

export default Formulario