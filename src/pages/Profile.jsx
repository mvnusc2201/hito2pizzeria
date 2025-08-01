import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

const Profile = () => {
  const { user, logout } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user?.email) {
      navigate("/login");
    }
  }, [user, navigate]);

  if (!user?.email) return null;

  return (
    <div className="container mt-5">
      <h2>Mi perfil</h2>
      <p>Email: {user.email}</p>
      <button className="btn btn-danger" onClick={logout}>
        Cerrar sesión
      </button>
    </div>
  );
};

export default Profile;
