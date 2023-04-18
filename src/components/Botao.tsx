import React, { ReactNode } from 'react'

interface BotaoProps {
    cor?: 'green' | 'blue' | 'gray'
    className?: string
    children: ReactNode
    onClick?: () => void
}

const Botao = (props: BotaoProps) => {
    const cor = props.cor ?? 'gray'
    return (
        <button className={`
        bg-gradient-to-r from-${cor}-400 to-${cor}-700
        text-white rounded-xl 
        px-4 py-3
        ${props.className}
    `}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    )
}

export default Botao