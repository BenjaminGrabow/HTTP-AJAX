import React from 'react';
import FriendsList from "../FriendsList/FriendsList";
import { Route, NavLink} from 'react-router-dom';

const Header = () => {
        return ( <StyledNav>
<NavLink to="/"></NavLink>

<Route path="/" component={FriendsList}></Route>
        </StyledNav> );
}
 
export default Header;