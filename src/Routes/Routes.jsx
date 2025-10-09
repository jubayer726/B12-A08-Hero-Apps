import React from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayout from '../Layout/MainLayout';
import Home from '../Pages/Home';
import Error from '../Pages/Error';
import AllApps from '../Pages/AllApps';
import AppDetails from '../Pages/AppDetails';
import AppError from '../Pages/AppError';
import Instalations from '../Pages/Instalations';
import Loading from '../Pages/Loading';

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <Error></Error>,
    children: [
        {
            index: true,
            path: '/',
            Component: Home,
            loader: () => fetch('../Data.json'),
            hydrateFallbackElement: <Loading></Loading>
        },
        {
            path: '/allApps',
            Component: AllApps,
            errorElement: <AppError></AppError>
        },
        {
            path: '/appdetails/:id',
            Component: AppDetails,
            errorElement: <AppError></AppError>
        },
        {
            path: '/instalations',
            Component: Instalations,
            
        }
        
    ]
  },
  
]);

export default router