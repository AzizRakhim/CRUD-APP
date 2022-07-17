import React from 'react';
import { Outlet, Navigate } from "react-router-dom";

function Private() {
  let isAuth = true;

  return (
    <div>
      {isAuth ? <Outlet /> : <Navigate to={'/login'} />}    
    </div>
  )
}

export default Private
