import React from 'react';
import ReactDOM from 'react-dom';

import styles from './Content.css';

class Content extends React.Component {
  render() {
    return (
        <div className={styles.mainContent}>
            Основной контент
        </div>
    );
  }
}

export default Content;
