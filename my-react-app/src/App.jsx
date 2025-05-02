import { useState } from 'react'
import './App.scss'
import MainRoutes from './routes/routes'
import Sidebar from './component/pages/sidebar'
import Topbar from './component/pages/topbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom'
const router = createBrowserRouter(MainRoutes, {
  basename: '/'
});
function App() {
  return(
    <div className="App">
  
      <RouterProvider router={router} />
  
      
    </div>
  );
}

export default App;
