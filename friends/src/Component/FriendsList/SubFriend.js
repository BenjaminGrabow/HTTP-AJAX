import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
background: #c31432;
background: -webkit-linear-gradient(to right,#240b36,#c31432);
background: linear-gradient(to right,#240b36,#c31432);
border-radius: 50%;
margin: 0 16rem;
box-shadow: 1rem .5rem .5rem black;
transition: all 2s ease-in;

&:hover{
        transform: rotate(30deg);
}
`;

const StyledDiv = styled.div`
color: white;
width: 50%;
margin: 0 auto;
height: 15rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`;

const SubFriend = (props) => {
        return (
                <StyledContainer>
                        <StyledDiv>
                                <p>Name: {props.friendData.name}</p>
                                <p>Age: {props.friendData.age}</p>
                                <p>Email: {props.friendData.email}</p>
                        </StyledDiv>
                </StyledContainer>
        );
}

export default SubFriend;