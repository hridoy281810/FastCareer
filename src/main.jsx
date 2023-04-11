import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './component/Layout/Layout';
import Home from './component/Home/Home';
import Statistics from './component/Statistics/Statistics';
import AppliedJobs from './component/AppliedJobs/AppliedJobs';
import Blog from './component/Blog/Blog';
import Error from './component/ErrorPage/Error';
import JobDetails from './component/JobDetails/JobDetails';
import { productsAndCartData } from './component/Loader/Loader';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout></Layout>,
    errorElement: <Error></Error>,
    loader:productsAndCartData,
    children:[
      {
        path: '/',
        element: <Home></Home>,
        loader: ()=>fetch(`featuredJob.json`)
      },
      {
        path:'jobdetails/:id',
        element: <JobDetails></JobDetails>,
        loader:async ({params})=> {
          const jobDetails = await fetch(`featuredJob.json`)
          const jsonJobDetails = await jobDetails.json()
          const singleJobDetails = jsonJobDetails.find(jb => jb.id == params.id)
          return singleJobDetails;
        }
      },
      {
        path:'/appliedjobs',
        element: <AppliedJobs></AppliedJobs>,
      },
      {
        path:'/statistics',
        element: <Statistics></Statistics>
      },
      {
        path:'/blog',
        element: <Blog></Blog>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>,
)
