import React from 'react'
import HeaderAdmin from '../../components/Dashboard/HeaderAdmin'
import { Outlet } from 'react-router-dom'

const Dashboard = ({children}) => {
    return (
        <>
            <div className='relative flex min-h-full h-full w-full'>
                <HeaderAdmin />
                <div className="pl-[63px] md:pl-[250px] w-full min-h-screen">
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default Dashboard
