import React from 'react';
import ReactDOM from 'react-dom';
import styles from './App.css';

class HelloMessage extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

ReactDOM.render( <HelloMessage name="Jane" />, document.getElementById( 'root' ));
