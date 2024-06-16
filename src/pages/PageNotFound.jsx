import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // redirect to the home page after 3 seconds
    const timer = setTimeout(() => {
      navigate("/");
    }, 3000);

    return () => clearTimeout(timer); // cleanup function for the timer
  }, [navigate]);

  return (
    <div>
      <h1>Page not found</h1>
      <p>Redirecting to the home page...</p>
    </div>
  );
};

export default PageNotFound;
