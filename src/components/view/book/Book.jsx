import './Book.scss';
import React from 'react';
import book from '../../../../books/book.json';

export default class Book extends React.Component {
    constructor(props) {
        super(props);

        this.books = book.books;
    }

    _renderBooks() {
        return this.books.map((book, i) => {
            const header = book.name;
            const text = book.text.split('').map((word, i) => {
                return <span key={`word-${header}-${i}`} className="word">{ word }</span>;
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
        </div>
    }
}