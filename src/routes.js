import About from "./Components/About"
import Login from "./Components/login"
import App from "./App"
import ErrorPage from "./Components/ErrorPage"


const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />

    },
    {
        path: "/about",
        element: <About/>,
        errorElement: <ErrorPage />
    },
    {
        path:"/login",
        element: <Login/>,
        errorElement: <ErrorPage />
    }
]

export default routes;