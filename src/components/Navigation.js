import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <NavLink exact to='/' activeClassName='active'>
        <span>Home</span>
      </NavLink>
      <NavLink to='/shop' activeClassName='active'>
        <span>Shop</span>
      </NavLink>
    </nav>
  );
}

export default Navigation;