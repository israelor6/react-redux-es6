import React, { Component } from 'react';
import styles from './App.css';
import Users from './components/users/users';

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
				<Users/>
      </div>
    );
  }
}

export default App;
