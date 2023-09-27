import React from 'react'
import { Navigate } from 'react-router-dom'
const PrivateRoutes = ({ auth: isAuthenticated }) => {
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoutes
