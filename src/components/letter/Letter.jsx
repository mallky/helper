import './Letter.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectLetter, openTooltip } from '../../store/actions/actions';

const mapStateToProps = (state) => ({
  isOpen: state.app.isOpen,
  currentLetter: state.appData.letter
});

const mapDispatchToProps = (dispatch) => ({
  selectLetter: (letter) => dispatch(selectLetter(letter)),
  openTooltip: (position) => dispatch(openTooltip(position))
});

@connect(mapStateToProps, mapDispatchToProps)
export default class Letter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: false
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    const position = {
      x: e.clientX,
      y: e.clientY
    };

    this.props.selectLetter(this.props.letter);
    this.props.openTooltip(position);
    this.setState({
      selected: true
    });
  }

  isSelected() {
    return this.props.isOpen && this.state.selected;
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
  letter: PropTypes.string.isRequired
};
