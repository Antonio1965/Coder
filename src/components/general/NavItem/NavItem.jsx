import { NavLink } from 'react-router-dom';

const NavItem = ({text, url = "#"}) => (
    <li>
        <NavLink to={url} activeClassName>{text}</NavLink>
    </li>
)

export default NavItem;