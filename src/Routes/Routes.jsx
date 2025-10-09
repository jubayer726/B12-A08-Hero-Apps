import React from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayout from '../Layout/MainLayout';
import Home from '../Pages/Home';
import Error from '../Pages/Error';
import AllApps from '../Pages/AllApps';
import AppDetails from '../Pages/AppDetails';
import AppError from '../Pages/AppError';
import Instalations from '../Pages/Instalations';

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
            hydrateFallbackElement: <h1 className="text-center text-3xl bg-red-600">Loading...</h1>
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