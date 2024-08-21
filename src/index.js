import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//라우터 구버전?? 
import { BrowserRouter} from "react-router-dom"

//라우터 신버전??
//import {createBrowserRouter,RouterProvider,Route,Link,} from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <div>Hello world!</div>,
//   },
// ]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
     {/* <RouterProvider router={router} /> */}
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
