import React from 'react'


export interface LayoutInterface {
  children: JSX.Element | JSX.Element[] | string
}

const Layout: React.FC<LayoutInterface> = ({ children }) => {
	return (
    <div className='p-[10px]'>
      { children }
    </div>
  )
}

export default Layout
