import './App.scss';
import React from 'react';
import Book from './components/book/Book.jsx';
import book from '../books/book.json';
import { connect } from 'react-redux';
import { setBooks } from './store/actions/actions';

const mapStateToProps = (state) => ({
  books: state.appData.books
});

const mapDispatchToProps = (dispatch) => ({
  setBooks: (books) => dispatch(setBooks(books))
});

@connect(mapStateToProps, mapDispatchToProps)
export default class App extends React.Component {
  componentDidMount() {
    this.props.setBooks(book);
  }

  render () {
    return <div className="main-app">
      <Book books={this.props.books ? this.props.books.books : null} />
    </div>;
  }
}
