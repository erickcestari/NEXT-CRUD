import React, { ReactNode } from 'react'

interface TituloProps {
    children: ReactNode
}

const Titulo = (props:TituloProps) => {
  return (
    <div className={`flex flex-col justify-center`}>
        <h1 className={`px-5 py-2 text-4xl`}>
            {props.children}
        </h1>
        <hr className={`border-2 border-purple-500`}/>
    </div>
  )
}

export default Titulo