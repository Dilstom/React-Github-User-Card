import React, { Component } from 'react';
import Follower from './Follower';
import axios from 'axios';

class User extends Component {
 state = {
  followers: [],
 };
 componentDidMount() {
  axios
   .get(`https://api.github.com/users/${this.props.user.login}/followers`)
   .then(res => this.setState({ followers: res.data }))
   .catch(err => console.log('err in CDM User: ', err));
 }
 render() {
  console.log(this.props);
  return (
   <div>
    <h3>Username: {this.props.user.login}</h3>
    <img src={this.props.user.avatar_url} alt="avatar" />
    <h5>Type: {this.props.user.type}</h5>
    <h5>
     Followers:
     {this.state.followers.length > 0
      ? this.state.followers.map(foll => {
         return <Follower f={foll} key={foll.id} />;
        })
      : 'No followers'}
    </h5>
   </div>
  );
 }
}

export default User;
