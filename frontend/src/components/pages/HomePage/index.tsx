import { useNavigate } from "react-router-dom";
import { logout } from "../../../api";
export const HomePage = () => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    console.log("logout");

    await logout();
    navigate("/");
  };

  return (
    <div>
      <p>ログイン中</p>
      <button onClick={() => handleLogout()}>ログアウト</button>
    </div>
  );
};
