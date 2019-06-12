import React from 'react';
import axios from 'axios';


export default class FriendInput extends React.Component {
        state = {
                id: "",
                name: "",
                age: "",
                email: ""
        }

        handleChangeId = (event) => {
                this.setState({
                        id: event.target.value
                })
        };

        handleChangeName = (event) => {
                this.setState({
                        name: event.target.value
                })
        };

        handleChangeAge = (event) => {
                this.setState({
                        age: event.target.value
                })
        };

        handleChangeEmail = (event) => {
                this.setState({
                        email: event.target.value
                })
        };

        handleSubmit = (event) => {
                event.preventDefault();

                const user = {
                        id: this.state.id,
                        name: this.state.name,
                        age: this.state.age,
                        email: this.state.email
                }

                axios.post('http://localhost:5000/friends', { user }).then(response => {
                                console.log(response);
                                console.log(response.data)
                        })
        };

        render() {
                return (
                        <div>
                                <form onSubmit={this.handleSubmit}>
                                        <label>
                                                Person Id:
                        <input type="text" name="id" onChange={this.handleChangeId} ></input>
                                        </label>
                                        <label>
                                                Person Name:
                        <input type="text" name="name" onChange={this.handleChangeName} ></input>
                                        </label>
                                        <label>
                                                Person Age:
                        <input type="text" name="age" onChange={this.handleChangeAge} ></input>
                                        </label>
                                        <label>
                                                Person Email:
                        <input type="text" name="email" onChange={this.handleChangeEmail} ></input>
                                        </label>
                                        <button type="submit" >Add Friend</button>
                                </form>
                        </div>
                );
        }
}