import React from 'react';
import Friends from './Friends';
import axios from 'axios';
import FriendInput from './FriendInput';
import styled from 'styled-components';

const StyledDiv = styled.div`

background: #bdc3c7;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #2c3e50, #bdc3c7);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #2c3e50, #bdc3c7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
height: 210vh;
`;

const friendsAPI = 'http://localhost:5000/friends';

export default class Container extends React.Component {
  state = {
    friend: null,
    errorMessage: '',
    spinner: false,
    name: "",
    age: "",
    email: "",
  }

  fetchFriendWithAxios = () => {
    this.setState({ spinner: true });

    axios.get('http://localhost:5000/friends')
      .then(response => {
        this.setState({ friend: response.data });
      })
      .catch(error => {
        this.setState({ errorMessage: error.message });
      })
      .finally(() => {
        this.setState({ spinner: false });
      });
  }

  componentDidMount() {
    this.fetchFriendWithAxios();
  }

  handleChange = (event) => {
    const name = event.target.name;

    const target = event.target.value;

    this.setState({
      [name]: target,
    })
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const newFriend = {
      name: this.state.name,
      age: Number(this.state.age),
      email: this.state.email,
    }

    axios.post(friendsAPI, newFriend)
      .then(response => {
        this.setState({
          friend: response.data
        })
      })
  };

  deleteFriend = (id) => {
    axios.delete(`${friendsAPI}/${id}`)
      .then(res => this.setState({
        friend: res.data
      }))
  };

  updateFriend = (id) => {
    const updatedFriend = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email,
    }

    axios.put(`${friendsAPI}/${id}`, updatedFriend).then(res => {
      this.setState({
        friend: res.data
      })
    })
  }

  render() {
    return (
      <StyledDiv>
        {
          this.state.errorMessage &&
          <div className='error'>{this.state.errorMessage}</div>
        }

        {
          this.state.spinner &&
          <div className='loading'>Loading friends...</div>
        }

        {this.state.friend && <Friends
          friend={this.state.friend}
          delete={this.deleteFriend}
          update={this.updateFriend} />
        }
        <FriendInput
          handle={this.handleSubmit}
          changeHandle={this.handleChange} />
      </StyledDiv>
    );
  }
}