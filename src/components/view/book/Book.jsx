import './Book.scss';
import React from 'react';
import book from '../../../../books/book.json';

import DescriptionTooltip from '../description-tooltip/DescriptionTooltip.jsx';

export default class Book extends React.Component {
  constructor(props) {
    super(props);

    this.books = book.books;
    this.state = {
      letter: '',
      pos: {
        x: 110,
        y: 110
      }
    };

    this.setLetter = this.setLetter.bind(this);
  }

  setLetter(e) {
    this.setState({
      letter: e.target.textContent,
      pos: {
        x: e.clientX,
        y: e.clientY
      }
    });
  }

  _renderBooks() {
    return this.books.map((book, i) => {
      const header = book.name;
      const text = book.text.split('').map((word, i) => {
        return <span
          key={`word-${header}-${i}`}
          className="word"
          onMouseOver={this.setLetter}>
          { word }
        </span>;
      });

      return <div key={`book-${header}-${i}`}>
        <h1>{ header }</h1>
        <div className="book">{ text }</div>
      </div>
    })
  }

  render() {
    return <div className="book-wrap">
      { this._renderBooks() }
      <DescriptionTooltip letter={this.state.letter} position={this.state.pos} />
    </div>
  }
}