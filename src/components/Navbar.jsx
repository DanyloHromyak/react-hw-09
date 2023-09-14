import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full flex gap-x-5">
      <NavLink className="hover:underline" to="/" end>
        Home
      </NavLink>
      <NavLink className="hover:underline" to="/movies">
        Movies
      </NavLink>
      <NavLink className="hover:underline" to="/nonExistentLink">
        Link which doesnt exists
      </NavLink>
    </nav>
  );
};
export default Navbar;
