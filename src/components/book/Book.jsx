import './Book.scss';
import React from 'react';
import PropTypes from 'prop-types';

import DescriptionTooltip from '../description-tooltip/DescriptionTooltip.jsx';
import Letter from '../letter/Letter.jsx';

export default class Book extends React.Component {
  _renderBooks() {
    return this.props.books ? this.props.books.map((book, i) => {
      const header = book.name;
      const text = book.text.split('').map((letter, i) => {
        return <Letter
          key={`word-${header}-${i}`}
          letter={letter} />;
      });

      return <div key={`book-${header}-${i}`}>
        <h1>{ header }</h1>
        <div className="book">{ text }</div>
      </div>
    }) : null;
  }

  render() {
    return <div className="book-wrap">
      { this._renderBooks() }
      <DescriptionTooltip />
    </div>
  }
}

Book.defaultProps = {
  books: null
};

Book.propTypes = {
  books: PropTypes.array
};
