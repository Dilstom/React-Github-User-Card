import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
 state = {
  users: [],
 };

 componentDidMount() {
  axios
   .get('https://api.github.com/users')
   .then(res => this.setState({ users: res.data }))
   .catch(err => console.log('err', err));
 }

 render() {
  console.log(this.state.users);
  return <div className="App"> hi</div>;
 }
}

export default App;
