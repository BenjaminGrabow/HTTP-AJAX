import React from 'react';
import axios from 'axios';


export default class Container extends React.Component {
  state = {
    friend: null,
    errorMessage: '',
    spinner: false,
  }

  fetchFriendWithAxios = () => {
    // turn spinner on
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

  render() {
    return (
      <div>
        {
          this.state.errorMessage &&
          <div className='error'>{this.state.errorMessage}</div>
        }

        {
          this.state.spinner &&
          <div className='loading'>Loading friends...</div>
        }

        {
          this.state.friend &&
          <div>{this.state.friend[1].name}</div>
        }
      </div>
    );
  }
}