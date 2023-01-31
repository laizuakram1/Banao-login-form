
import './App.css';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import { BrowserRouter, Link, Outlet, useRoutes } from 'react-router-dom';


function App() {
      
      const routes = useRoutes([
        { path: '/', element: <SignUp />},
        { path: '/Login', element: <Login /> },
        { path: '/SignUp', element: <SignUp /> }
         
    ]);
    return routes;

}

export default App;
