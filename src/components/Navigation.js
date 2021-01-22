import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <div>
        <NavLink exact to='/' activeClassName='active'>
          Home
        </NavLink>
      </div>
      <div>
        <NavLink to='/shop' activeClassName='active'>
          Shop
        </NavLink>
      </div>
    </nav>
  );
}

export default Navigation;