import react from 'react';
import Dashboard from "../component/pages/dashboard";
import Student from"../component/pages/reports";
import Teacher from "../component/pages/appointment";
import School from "../component/pages/profile";
import Bill from "../component/pages/bill";
import Deposit from "../component/pages/deposit";
import Receipt from "../component/pages/receipt";
import Prescription from "../component/pages/prescription";
import Login from "../component/pages/login";
import Signup from "../component/pages/signup";
import Patient from "../component/pages/patient";
import Doctor from "../component/pages/doctor";
import Layout from "../layouts/layout";
import PublicLayout from "../layouts/publicLayout";

const MainRoutes= [
      { path:"/", element:<Layout/>, 
        children: [       
          { path: "dashboard", element: <Dashboard/>},
          { path:"student", element:<Student/>},
          { path:"teacher", element:<Teacher/>},
          { path:"school", element:<School/>},
          { path:"bill", element:<Bill/>},
          { path:"deposit", element:<Deposit/>},
          { path:"receipt", element:<Receipt/>},
          { path:"prescription", element:<Prescription/>},
  ]}, 
    {path:"/",element:<PublicLayout/>, children:[
    {
      path: "signup", element: <Signup/>      
    },
    {
      path: "login", element: <Login/>
    },
    {
      path: "patient", element: <Patient/>      
    },
    {
      path: "doctor", element: <Doctor/>      
    },
  ]}, 
]
export default MainRoutes