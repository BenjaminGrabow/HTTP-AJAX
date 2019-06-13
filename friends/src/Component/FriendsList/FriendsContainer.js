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

.button {
background-color: red;
border-radius: 50%;
width: 15%;
height: 5rem;
box-shadow: 1rem .5rem .5rem black;

}
`;
const button = document.getElementsByClassName("button");

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

  showFriends = (e) => {
  
    this.setState({ spinner: true });

    if (button[0].textContent === "Show") {


      axios.get('http://localhost:5000/friends')
        .then(response => {
          this.setState({ friend: response.data });
        })
        .catch(error => {
          this.setState({ errorMessage: error.message });
        })
        .finally(() => {
          this.setState({ spinner: false });
        })

      if (button[0].textContent === "Show") {

        button[0].textContent = "Hide";

        if (button[0].textContent === "Hide") {
          button[0].onclick = this.hide;

          }
      }
    }
  }

  hide = () => {

    axios.get('http://localhost:5000/friends')
        .then(response => {
          this.setState({ friend: null,
          spinner: false });
        })
      
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
    // if( button[0].textContent === "Hide") {
    //   button[0].appendChild()
    // }
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
        <button className="button" onClick={this.showFriends}>Show</button>
        <FriendInput
          handle={this.handleSubmit}
          changeHandle={this.handleChange}
          showFriend={this.fetchFriendWithAxios} />
      </StyledDiv>
    );
  }
}