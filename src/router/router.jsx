import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import PostDetail from "../components/PostDetail";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    }, {
        path: '/item/:id',
        element: <PostDetail />
    }
])

export default router