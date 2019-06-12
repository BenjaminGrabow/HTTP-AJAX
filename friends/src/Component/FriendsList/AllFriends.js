import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
/* background-color: lightgrey; */
`;

const StyledDiv = styled.div`
background: #c31432;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #240b36, #c31432);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #240b36, #c31432); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
display: flex;
color: white;
width: 50%;
margin: 1rem auto;
justify-content: space-around;
border-radius: 3rem;
align-items: center;

button {
background-color: red;
border-radius: 50%;
width: 15%;
height: 5rem;
}
`;

const AllFriends = (props) => {
        return (

                <StyledContainer>
                        {props.friendly.map(friend => {
                                return  <StyledDiv key={friend.id}>
                                        <div className="friend">
                                        <p>Name: {friend.name}</p>
                                        <p>Age: {friend.age}</p>
                                        <p>Email: {friend.email}</p>
                                        </div>
                                        <button onClick={() => props.deleter(friend.id)}>Delete</button>
                                        <button onClick={() => props.updater(friend.id)}>Update</button>
                                </StyledDiv>
                        })}
                </StyledContainer>
        );
}

export default AllFriends;