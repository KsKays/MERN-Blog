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
    <div className="navbar bg-slate-200 drop-shadow-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabindex="0"
            role="button"
            className="btn btn-ghost lg:hidden"
          ></div>
        </div>
        <a href="/" className="btn btn-ghost text-xl">
          DD NEWS
        </a>
      </div>
      {/* <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="/create">Create Post</a>
          </li>
        </ul>
      </div> */}

      <div className="navbar-end flex space-x-2">
        {user ? (
          <>
            <a href="/create" className="btn btn-primary">
              Create new post
            </a>
            <button onClick={handleLogout} className="btn btn-secondary">
              Logout
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
