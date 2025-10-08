import React from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayout from '../Layout/MainLayout';
import Error from '../Pages/Error';
import Home from '../Pages/Home';

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: Error,
    children: [
        {
            index: true,
            path: '/',
            Component: Home
        }
    ]
  },
]);

export default router