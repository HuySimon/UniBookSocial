import React from 'react'
import Header from '../../components/Header/Header'
import { Outlet } from 'react-router-dom'

const DefaultLayout = ({children}) => {
    return (
        <>
            <div className='relative flex min-h-full w-full'>
                <Header />
                <div className="w-full min-h-screen">
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default DefaultLayout
