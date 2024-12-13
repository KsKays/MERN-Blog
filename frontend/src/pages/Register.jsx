import { useState, useEffect } from "react";
import AuthService from "../services/auth.service";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import { useAuthContext } from "../context/AuthContext";

const RegisterForm = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((user) => ({ ...user, [name]: value }));
  };

  const { user: loggedUser } = useAuthContext();
  useEffect(() => {
    if (loggedUser) {
      navigate("/");
    }
  }, [loggedUser]);

  const handleSubmit = async () => {
    try {
      const currentUser = await AuthService.register(
        user.username,
        user.password
      );
      console.log(currentUser);
      if (currentUser.status === 200) {
        Swal.fire({
          title: "User Registration",
          text: currentUser.data.message,
          icon: "success",
        });
        setUser({
          username: "",
          password: "",
        });
        navigate("/login");
      }
    } catch (error) {
      Swal.fire({
        title: "User Registration",
        text: error?.response.data?.message || error.message,
        icon: "error",
      });
    }
  };

  return (
    <div className="container mx-auto max-w-md mt-20 px-4">
      <div className="card shadow-lg bg-base-100 p-6 rounded-lg">
        <h1 className="text-center text-2xl font-bold mb-6">Register</h1>

        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Username</span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full"
            value={user.username}
            placeholder="Username"
            name="username"
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
            value={user.password}
            name="password"
            required
            onChange={handleChange}
          />
        </div>

        <div className="flex justify-end space-x-4">
          <button
            className="btn btn-primary"
            type="button"
            onClick={handleSubmit}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
