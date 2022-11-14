import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Protected = ({ isLoggedIn, children }) => {
  const { account } = useSelector((state) => state.account);
  console.log(account);
  if (!isLoggedIn) {
    return <Navigate to="/signin" replace />;
  } else if (account.Role === "user") {
    alert("Chỉ có admin mới có quyền truy cập");
    return <Navigate to="/account" replace />;
  }
  return children;
};
export default Protected;
