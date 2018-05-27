import './Letter.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectLetter, openTooltip } from '../../store/actions/actions';

const mapDispatchToProps = (dispatch) => ({
  selectLetter: (letter) => dispatch(selectLetter(letter)),
  openTooltip: (position) => dispatch(openTooltip(position))
});

@connect(null, mapDispatchToProps)
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
    
  render() {
    return <span
      className={`word ${this.state.selected ? 'selected' : ''}`}
      onClick={this.onClick}>
      {this.props.letter}
    </span>
  }
}

Letter.propTypes = {
  letter: PropTypes.string.isRequired
};
