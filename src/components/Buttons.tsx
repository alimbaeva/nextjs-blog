import React, { ReactNode } from 'react'

type Props = {
    children: ReactNode;
    className?: string;
    onClick?: () => void;
}

const Buttons = ({ children, className, onClick }: Props) => {
  return (
    <button
    className={`p-2 bg-red ${className} round-md hover:ring-2 hover:ring-gray-300`}
      onClick={onClick}
    >{children}</button>
  )
}

export default Buttons