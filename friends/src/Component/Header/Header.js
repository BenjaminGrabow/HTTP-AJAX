import React from 'react';
import FriendsList from "../FriendsList/FriendsList";
import styled from 'styled-components';
import { Route, NavLink } from 'react-router-dom';

const StyledNav = styled.nav`

background-color: black;
width: 100%;
height: 2rem;

a {
        text-decoration: none;
        color: white;
        margin: .5rem;
        padding: .5rem;
}
`;

const Header = () => {
        return (
                <StyledNav>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/friends">Friends</NavLink>

                        <Route path="/friends" component={FriendsList}></Route>
                </StyledNav>);
}

export default Header;