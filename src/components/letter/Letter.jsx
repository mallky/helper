import './Letter.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectLetter, openTooltip } from '../../store/actions/actions';

const mapStateToProps = (state) => ({
  isOpen: state.app.isOpen,
  letterData: state.appData.letterData
});

const mapDispatchToProps = (dispatch) => ({
  selectLetter: (letterData) => dispatch(selectLetter(letterData)),
  openTooltip: (position) => dispatch(openTooltip(position))
});

@connect(mapStateToProps, mapDispatchToProps)
export default class Letter extends React.Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    const position = {
      x: e.clientX,
      y: e.clientY
    };
    const letterData = {
      id: this.props.guid,
      letter: this.props.letter
    };

    this.props.selectLetter(letterData);
    this.props.openTooltip(position);
  }

  isSelected() {
    const { letter, id } = this.props.letterData;

    return this.props.isOpen && this.props.letter === letter && this.props.guid === id;
  }

  render() {
    return <span
      className={`word ${this.isSelected() ? 'selected' : ''}`}
      onClick={this.onClick}>
      {this.props.letter}
    </span>
  }
}

Letter.propTypes = {
  letter: PropTypes.string.isRequired,
  guid: PropTypes.string.isRequired
};
