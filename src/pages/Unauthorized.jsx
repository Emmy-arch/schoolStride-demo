import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Unauthorized = () => {

    // Use navigation to return to the previous page
    const navigate = useNavigate();

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">
            Oops! You are not authorized to access this page
        </p>
        <p onClick={() => navigate(-1)} className="text-primary underline hover:text-primary/90 cursor-pointer">
          Return
        </p>
      </div>
    </div>
  )
}

export default Unauthorized