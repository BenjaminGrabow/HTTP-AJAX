import React from 'react';
import SubFriend from './SubFriend';
import AllFriends from './AllFriends';
import { NavLink, Route } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.nav`
display: flex;
background: #bdc3c7;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #2c3e50, #bdc3c7);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #2c3e50, #bdc3c7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
justify-content: space-between;
width: 100%;
height: 4rem;

a {
        text-decoration: none;
        color: white;
        font-size: 2rem;
}
`;

const StyledContainer = styled.div`
margin-bottom: 5rem;
`;

const Friends = (props) => {
        return (
                <StyledContainer>
                        <StyledNav>
                                <NavLink to="/friends" >Home</NavLink>
                                {props.friend.map(friend => {
                                        return <NavLink key={friend.id}
                                                to={`/friends/${friend.id}`}>
                                                {friend.name}
                                        </NavLink>
                                })}
                        </StyledNav>
                        {props.friend.map(friend => {
                                return <Route
                                        key={friend.id}
                                        path={`/friends/${friend.id}`}
                                        render={() => <SubFriend {...props}
                                                friendData={friend} />}>
                                </Route>
                        })}
                        <Route exact path="/friends" render={() => <AllFriends
                                {...props}
                                updater={props.update}
                                deleter={props.delete}
                                friendly={props.friend} />}>
                        </Route>
                </StyledContainer>
        );
}

export default Friends;