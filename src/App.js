import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import MainPage from './Views/MainPage/MainPage';
import Footer from './Components/Footer/Footer';
import { RouterProvider, createBrowserRouter, useLocation } from 'react-router-dom';
import GlobalMsg from './Views/GlobalMsg/GlobalMsg';
import { useEffect } from 'react';

function App() {
  
  

  const router = createBrowserRouter([{
    path: "/",
    element: [<Header />,<MainPage />,<Footer />]
  }, {
    path: "/Global",
    element: [<Header />,<GlobalMsg />]
  },
  ]);
  return (
    <div className="App">
      
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
