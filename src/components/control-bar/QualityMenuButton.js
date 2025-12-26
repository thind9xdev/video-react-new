import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classNames from 'classnames';
import MenuButton from '../menu/MenuButton';

const propTypes = {
  player: PropTypes.object,
  actions: PropTypes.object,
  qualities: PropTypes.array,
  className: PropTypes.string
};

const defaultProps = {
  qualities: ['auto', '1080p', '720p', '480p', '360p', '240p']
};

class QualityMenuButton extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelectItem = this.handleSelectItem.bind(this);
  }

  handleSelectItem(index) {
    const { qualities, actions } = this.props;
    if (index >= 0 && index < qualities.length) {
      actions.changeQuality(qualities[index]);
    }
  }

  render() {
    const { qualities, player } = this.props;
    const items = qualities.map(quality => ({
      label: quality,
      value: quality
    }));
    const currentQuality = player.quality || 'auto';
    const selectedIndex = qualities.indexOf(currentQuality);

    return (
      <MenuButton
        className={classNames(
          'video-react-new-quality-menu',
          this.props.className
        )}
        onSelectItem={this.handleSelectItem}
        items={items}
        selectedIndex={selectedIndex >= 0 ? selectedIndex : 0}
      >
        <span className="video-react-new-control-text">Quality</span>
        <div className="video-react-new-quality-value">
          {currentQuality}
        </div>
      </MenuButton>
    );
  }
}

QualityMenuButton.propTypes = propTypes;
QualityMenuButton.defaultProps = defaultProps;
QualityMenuButton.displayName = 'QualityMenuButton';
export default QualityMenuButton;
