import { createBrowserRouter } from "react-router-dom";
import Login from "../views/auth/Login";
import DefaultLayout from "../views/layout/DefaultLayout";
import Home from "../views/pages/Home";
import SignUp from "../views/auth/SignUp";
import Profile from "../views/pages/Profile";
import NotFound from '../views/pages/NotFound'
import ForgotPassword from "../views/auth/forgotPassword/ForgotPassword";
const router = createBrowserRouter([
	{
		path: "/",
		element: <DefaultLayout />,
		children: [
			{
				path: "/",
				element: <Home />
			},
			{
				path: "/profile",
				element: <Profile />
			}
		]
	},
	{
		path: "/login",
		element: <Login />
	},
	{
		path: "/forgotpassword",
		element: <ForgotPassword />
	},
	{
		path: "/signup",
		element: <SignUp />
	},
	{
		path: "*",
		element: <NotFound />
	}
])

export default router
