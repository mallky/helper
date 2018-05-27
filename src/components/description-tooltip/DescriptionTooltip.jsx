import './DescriptionTooltip.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  position: state.app.position,
  letter: state.appData.letter,
  isOpen: state.app.isOpen
});

@connect(mapStateToProps)
export default class DescriptionTooltip extends React.Component {
  constructor(props) {
    super(props);

    this.tooltip = null;
  }

  getTooltipSize() {
    return {
      width: this.tooltip ? this.tooltip.getBoundingClientRect().width : 0,
      height: this.tooltip ? this.tooltip.getBoundingClientRect().height : 0
    }
  }

  render() {
    const { width, height } = this.getTooltipSize();
    console.log(width);
    const style = {
      top: this.props.position.y - height - 40,
      left: this.props.position.x - width / 2 + 5
    };

    return (<div
      className={`overlay ${this.props.isOpen ? '' : 'd-none'}`}
      style={style}
      ref={(tooltip) => this.tooltip = tooltip}>
      <div className="description-tooltip">
        <div className="letter">{this.props.letter}</div>
        <div>Empty asdasdasdasd</div>
      </div>
    </div>);
  }
}

DescriptionTooltip.defaultProps = {
  letter: '',
  position: {
    x: 0,
    y: 0
  },
  isVisible: false
};

DescriptionTooltip.propTypes = {
  letter: PropTypes.string,
  position: PropTypes.object,
  isOpen: PropTypes.bool
};