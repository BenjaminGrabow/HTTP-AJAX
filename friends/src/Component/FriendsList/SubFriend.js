import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
background: #009FFF;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #ec2F4B, #009FFF);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #ec2F4B, #009FFF); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

const StyledDiv = styled.div`
color: white;
width: 50%;
margin: 0 auto;
`;

const SubFriend = (props) => {
        return (
                <StyledContainer>
                                <StyledDiv>
                                        <div>Name: {props.friendData.name}</div>
                                        <div>Age: {props.friendData.age}</div>
                                        <div>Email: {props.friendData.email}</div>
                                </StyledDiv>
                </StyledContainer>
        );
}

export default SubFriend;