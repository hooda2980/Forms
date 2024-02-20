
import './App.css';
// import LoginForm from './forms/LoginForm';
import SignUpForm from './forms/SignUpForm';
import Items from './Pagination/Table';
import DemoPagination from './Pagination/DemoPagination';
import ClickSlider from './ImagerSelectSlider/ClickSlider';
import Newpagination from './NewPagination/Newpagination';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      // element: <LoginForm/>,
      element: <Items />,
    },
    {
      path: "/signup",
      element: <SignUpForm />,
    },
  ])

  return (
    <>
      <RouterProvider router={router} />
      <DemoPagination/>
      <ClickSlider/>
      <Newpagination/>
    </>

  );
}

export default App;
