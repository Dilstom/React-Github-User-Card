import React from 'react';
import axios from 'axios';

import User from './components/User';
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
  return (
   <div className="App">
    {this.state.users.map(u => {
     return <User user={u} key={u.id} />;
    })}
   </div>
  );
 }
}

export default App;
