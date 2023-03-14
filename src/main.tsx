import ReactDOM from 'react-dom/client';
import App from './App';
import Error from './Error404';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import News from './pages/News/News';
import Employy from './pages/Employy/Employy';
import Events from './pages/Events/Events';
import Books from './pages/Books/Books';
import { RecoilRoot } from 'recoil';
const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
    },
    {
        path: '/news',
        element: <News />,
    },
    {
        path: '/employy',
        element: <Employy />,
    },
    {
        path: '/events',
        element: <Events />,
    },
    {
        path: '/books',
        element: <Books />,
    },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <RecoilRoot>
        <RouterProvider router={router} />
    </RecoilRoot>,
);
