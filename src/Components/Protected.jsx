import { Navigate, Outlet } from "react-router-dom";
import PropTypes from "prop-types";
export const Protected = ({
  isAllowed,
  children,
  redirecTo = "/Tailwind-Practice/panel/home",
}) => {
  if (!isAllowed) {
    return <Navigate to={redirecTo} />;
  }
  return children ? children : <Outlet />;
};

Protected.propTypes = {
  isAllowed: PropTypes.bool.isRequired,
  redirecTo: PropTypes.string,
  children: PropTypes.object,
};
