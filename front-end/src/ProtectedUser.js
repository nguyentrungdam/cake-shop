import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedUser = ({ isLoggedIn, children }) => {
  const { account } = useSelector((state) => state.account);
  console.log(account);
  if (!isLoggedIn) {
    return <Navigate to="/signin" replace />;
  } else if (account.Role === "admin") {
    alert("Only user has access!");
    return <Navigate to="/admin" replace />;
  }
  return children;
};
export default ProtectedUser;
