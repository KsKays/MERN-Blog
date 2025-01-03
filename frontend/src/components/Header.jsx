import LoginButton from "./LoginButton";
import RegisterButton from "./RegisterButton";
import { useAuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";

const Header = () => {
  const { user, logout } = useAuthContext();

  const handleLogout = () => {
    Swal.fire({
      title: "Logout",
      text: "Do you want to logout?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        logout(); // เรียกใช้ฟังก์ชัน logout
        Swal.fire({
          title: "Logout",
          text: "Logout successfully",
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="navbar bg-gray-100 drop-shadow-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabindex="0"
            role="button"
            className="btn btn-ghost lg:hidden"
          ></div>
        </div>
        <a href="/" className="btn btn-ghost text-xl text-gray-800">
          WEBBLOG
        </a>
      </div>

      <div className="navbar-end flex space-x-2">
        {user ? (
          <>
            <a
              href="/create"
              className="btn btn-primary bg-gray-300 hover:bg-gray-400 text-gray-800 border-0 outline-none"
            >
              Create new post
            </a>
            <button
              onClick={handleLogout}
              className="btn btn-secondary bg-gray-300 hover:bg-gray-400 text-gray-800 border-0 outline-none"
            >
              Logout (@{user?.username})
            </button>
          </>
        ) : (
          <>
            <LoginButton />
            <RegisterButton />
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
