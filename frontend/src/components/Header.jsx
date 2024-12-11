import LoginButton from "./LoginButton";
import RegisterButton from "./RegisterButton";

const Header = () => {
  return (
    <div class="navbar bg-base-100">
      <div class="navbar-start">
        <div class="dropdown">
          <div tabindex="0" role="button" class="btn btn-ghost lg:hidden"></div>
        </div>
        <a href="/" class="btn btn-ghost text-xl">
          DD NEWS
        </a>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1">
          <li>
            <a>Create Post</a>
          </li>
        </ul>
      </div>
      <div className="flex space-x-2 navbar-end">
        <LoginButton />
        <RegisterButton />
      </div>
    </div>
  );
};

export default Header;
