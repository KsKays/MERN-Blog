import { useEffect, useState } from "react";
import AuthService from "../services/auth.service";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import { useAuthContext } from "../context/AuthContext";

const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const { login, user: loggedUser } = useAuthContext();

  useEffect(() => {
    if (loggedUser) {
      navigate("/");
    }
  }, [loggedUser]);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((user) => ({ ...user, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      const currentUser = await AuthService.login(user.username, user.password);

      console.log(currentUser);
      if (currentUser.status === 200) {
        login(currentUser.data); //ล็อคอินแล้วเปลี่ยน state // Header จะเปลี่ยน
        Swal.fire({
          title: "User Login",
          text: currentUser.data.message,
          icon: "success",
        });
        setUser({
          username: "",
          password: "",
        });
        navigate("/");
      }
    } catch (error) {
      console.log(error);

      Swal.fire({
        title: "User Login",
        text: error?.response?.data?.message || error.message,
        icon: "error",
      });
    }
  };

  return (
    <div className="container mx-auto max-w-md mt-20 px-4 py-6">
      <div className="card shadow-lg bg-base-100 p-6 rounded-lg">
        <h1 className="text-center text-2xl font-bold mb-6">Login</h1>
        <div>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Username</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="Username"
              name="username"
              value={user.username}
              required
              onChange={handleChange}
            />
          </div>
          <div className="form-control mb-6">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              className="input input-bordered w-full"
              placeholder="Password"
              name="password"
              value={user.password}
              required
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
