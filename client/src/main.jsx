import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './reset.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/router.jsx'
import Login from './views/auth/Login'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
)
