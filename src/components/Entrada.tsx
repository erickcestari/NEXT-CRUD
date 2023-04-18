import { AnyTxtRecord } from 'dns'
import React from 'react'

interface EntradaProps {
    tipo?: 'text' | 'number'
    texto: string
    valor: any
    somenteLeitura?: boolean
    valorMudou?: (valor: any) => void
    className?: string
}

const Entrada = (props:EntradaProps) => {
  return (
    <div className={`flex flex-col ${props.className}`}>
        <label className='mb-2'>
            {props.texto}
        </label>
        <input 
            type={props.tipo ?? 'text'}
            value={props.valor}
            readOnly={props.somenteLeitura}
            onChange={e => props.valorMudou?.(e.target.value)}
            className={`
                border border-purple-500 rounded-lg 
                focus:outline-none bg-gray-50 
                ${!props.somenteLeitura && 'focus:bg-white'}
                px-4 py-2 
            `}
        />
    </div>
  )
}

export default Entrada