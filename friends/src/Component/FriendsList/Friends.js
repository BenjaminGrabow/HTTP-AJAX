import React from 'react';
import SubFriend from './SubFriend';
import AllFriends from './AllFriends';
import { NavLink, Route } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.nav`
display: flex;
background-color: black;
justify-content: space-between;
width: 100%;
height: 4rem;

a {
        text-decoration: none;
        color: white;
        font-size: 2rem;
}
`;

const Friends = (props) => {
        return (
                <div>
                        <StyledNav>
                                <NavLink to="/" >Home</NavLink>
                                {props.friend.map(friend => {
                                        return <NavLink key={friend.id} to={`/${friend.name}`} >{friend.name}</NavLink>

                                })}
                        </StyledNav>
                        {props.friend.map(friend => {
                                return <Route key={friend.id} path={`/${friend.name}`} render={() => <SubFriend {...props} friendData={friend} />} ></Route>
                        })}
                        <Route exact path="/" render={() => <AllFriends {...props} updater={props.update} deleter={props.delete} friendly={props.friend} />} ></Route>
                </div>
        );
}

export default Friends;