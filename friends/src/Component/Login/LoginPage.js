import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
display: flex;
flex-direction: column;
width: 50%;
margin: 2rem auto;
background-color: black;
border-radius: 50%;
color: white;
justify-content: center;
align-items: center;
height: 25rem;
background: #c31432;
background: -webkit-linear-gradient(to right,#240b36,#c31432);
background: linear-gradient(to right,#240b36,#c31432);

button {
  margin-top: 2rem;
background-color: red;
border-radius: 50%;
width: 15%;
height: 5rem;
box-shadow: 1rem .5rem .5rem black;
}

a {
        text-decoration: none;
        color: white;
        font-size: 1.5rem;
}
`;

class LoginPage extends React.Component {
        constructor(props) {
                super(props);
                this.state = {  }
        }
        render() { 
                return ( 
                        <StyledDiv>       
                <h1>Login Here</h1>
                <p>Username</p>
                <input onChange={this.theUsername} type="text" name="" placeholder="Enter Username" />
                <p>Password</p>
                <input onChange={this.thePassword} type="password" name="" placeholder="Enter Password" />
                <button><a href="/friends">Login</a></button>
                </StyledDiv>
                 );
        }
}
 
export default LoginPage;