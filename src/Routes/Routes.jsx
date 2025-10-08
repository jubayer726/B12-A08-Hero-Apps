import React from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayout from '../Layout/MainLayout';
import Home from '../Pages/Home';
import Error from '../Pages/Error';
import AllApps from '../Pages/AllApps';
import AppDetails from '../Pages/AppDetails';

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
        },
        {
            path: '/appdetails',
            Component: AppDetails,
        }
    ]
  },
]);

export default router