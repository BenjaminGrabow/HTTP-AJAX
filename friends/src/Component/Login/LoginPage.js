import React from 'react';

class LoginPage extends React.Component {
        constructor(props) {
                super(props);
                this.state = {  }
        }
        render() { 
                return ( 
                        <div className="loginBox">       
                <h1>Login Here</h1>
                <p>Username</p>
                <input onChange={this.theUsername} type="text" name="" placeholder="Enter Username" />
                <p>Password</p>
                <input onChange={this.thePassword} type="password" name="" placeholder="Enter Password" />
                <a href="/friends">Login</a>
                </div>
                 );
        }
}
 
export default LoginPage;