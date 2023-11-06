import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './reset.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/router.jsx'
import Login from './views/auth/Login'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from './context/AuthProvider'
import { SearchProvider } from './context/SearchProvider'
import { HeaderProvider } from './context/HeaderProvider'
import { PostProvider } from './context/Post/PostProvider'
import { NotificationProvider } from './context/Notifcation/NotificationProvider.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
	<>
		<AuthProvider>
			<PostProvider>
				<NotificationProvider>
					<SearchProvider>
						<HeaderProvider>
							<RouterProvider router={router} />
						</HeaderProvider>
					</SearchProvider>
				</NotificationProvider>
			</PostProvider>
		</AuthProvider>
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
	</>,
)
