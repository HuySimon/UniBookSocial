import React, { useEffect } from 'react'
import Header from '../../components/Header/Header'
import { Outlet } from 'react-router-dom'

const DefaultLayout = ({ children }) => {
	useEffect(() => {
		document.title = "Home"
	}, [])
	return (
		<>
			<div className='relative flex min-h-full h-full w-full z-50'>
				<Header />
				<div className="pl-[63px] md:pl-[250px] w-full min-h-screen">
					<Outlet />
				</div>
			</div>
		</>
	)
}

export default DefaultLayout
