import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
position: fixed;
bottom: 0;
left: 0;
width: 100%;
height: 4rem;

form {
        width: 100%;
        display: flex;
        justify-content: space-around;
}
input {
    border-radius: 3rem; 
    margin-top: .5rem;
    box-shadow: 1rem .5rem .5rem black;   
}

button {
        margin-top: .5rem; 
background-color: red;
border-radius: 50%;
width: 15%;
height: 3rem;
box-shadow: 1rem .5rem .5rem black;
}
`;


const FriendInput = (props) => {

                return (
                        <StyledDiv>
                                <form onSubmit={props.handle} >
                        <input type="text" name="name" onChange={props.changeHandle} placeholder="Add Name" ></input>
                        <input type="text" name="age" onChange={props.changeHandle} placeholder="Add Age" ></input>
                        <input type="text" name="email" onChange={props.changeHandle} placeholder="Add Email" ></input>
                                        <button type="submit" >Add Friend</button>
                                </form>
                        </StyledDiv>
                );
        }

export default FriendInput;