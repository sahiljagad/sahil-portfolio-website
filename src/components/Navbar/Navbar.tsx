import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";

type NavItemProps = {
  path: string;
  text: string;
  currentPath: string;
};

const NavItem = ({ path, text, currentPath }: NavItemProps) => (
  <li>
    <NavLink
      to={path}
      className={currentPath === path ? "active-link" : "nav-link"}
    >
      {text}
    </NavLink>
  </li>
);

function Navbar() {
  const location = useLocation();

  return (
    <nav className='navbar'>
      <ul>
        <NavItem path='/' text='Home' currentPath={location.pathname} />
        <NavItem path='/about' text='About' currentPath={location.pathname} />
        <NavItem
          path='/projects'
          text='Projects'
          currentPath={location.pathname}
        />
        <NavItem
          path='/photography'
          text='Photography'
          currentPath={location.pathname}
        />
        <NavItem path='/blog' text='Blog' currentPath={location.pathname} />
        <NavItem
          path='/highlights'
          text='Highlights'
          currentPath={location.pathname}
        />
      </ul>
    </nav>
  );
}
export default Navbar;
