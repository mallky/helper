import './App.scss';
import React from 'react';
import Book from './components/book/Book.jsx';

export default class App extends React.Component {
  render () {
    return <div className="main-app">
      <Book />
    </div>;
  }
}
