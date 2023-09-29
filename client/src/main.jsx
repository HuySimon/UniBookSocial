import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './reset.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/router.jsx'
import Login from './views/auth/Login'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
		<ToastContainer
			position="top-right"
			autoClose={5000}
			hideProgressBar={false}
			newestOnTop={false}
			closeOnClick
			rtl={false}
			pauseOnFocusLoss
			draggable
			pauseOnHover
			theme="light"
		/>
	</React.StrictMode>,
)