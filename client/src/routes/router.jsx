import { createBrowserRouter } from "react-router-dom";
import Login from "../views/auth/Login";
import DefaultLayout from "../views/layout/DefaultLayout";
import Dashboard from "../views/layout/Dashboard";
import Home from "../views/pages/Home";
import SignUp from "../views/auth/SignUp";
import Profile from "../views/pages/Profile";
import NotFound from '../views/pages/PageNotFound'
import ForgotPassword from "../views/auth/forgotPassword/ForgotPassword";
import Search from '../views/pages/Search'
import CreatePost from "../components/Post/CreatePost";
import PrivateRoutes from '../wrapper/PrivateRoutes'
import { useAuthContext } from "../hooks/useAuthContext";
import Users from "../views/pages/Users";
import Statics from "../views/pages/Statics";
import Posts from "../views/pages/Posts";
import DetailPost from "../components/Post/DetailPost";
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
			},
			{
				path: "/search",
				element: <Search />
			}, 
			{
				path: "/create",
				element: <CreatePost />
			},
		]
	},
	{
		path: "/dashboard",
		element: <Dashboard />,
		children: [
					{
						path: "/dashboard/users",
						element: <Users />
					},
					{
						path: "/dashboard/posts",
						element: <Posts />
					},
					{
						path: "/dashboard/statics",
						element: <Statics />
					},
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
		path: "/detailPost",
		element: <DetailPost />
	},
	{
		path: "*",
		element: <NotFound />
	}
])

export default router
