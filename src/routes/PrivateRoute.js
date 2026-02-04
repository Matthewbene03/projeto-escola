import { Navigate, useLocation } from "react-router-dom";

export default function PrivateRoute({ children, isLoggedIn }) {
  const location = useLocation();

  if (!isLoggedIn) {
    return (
      <Navigate
        to="/login"
        state={{ prevPath: location.pathname }}
        replace
      />
    );
  }

  return children;
}