import React from 'react';
import { shallow } from 'enzyme';
import FullscreenToggle from '../components/control-bar/FullscreenToggle';

describe('FullscreenToggle', () => {
  it('should render with "button" tag', () => {
    const wrapper = shallow(
      <FullscreenToggle
        actions={{}}
        player={{
          isFullscreen: false
        }}
      />
    );

    expect(wrapper.type()).toBe('button');
  });

  it('should render with "video-react-new-fullscreen-control" class', () => {
    const wrapper = shallow(
      <FullscreenToggle
        actions={{}}
        player={{
          isFullscreen: false
        }}
      />
    );
    expect(wrapper.hasClass('video-react-new-fullscreen-control')).toBe(true);
  });

  it('should render with "video-react-new-icon-fullscreen-exit" class when player is full screen', () => {
    const wrapper = shallow(
      <FullscreenToggle
        actions={{}}
        player={{
          isFullscreen: true
        }}
      />
    );
    expect(wrapper.hasClass('video-react-new-icon-fullscreen-exit')).toBe(true);
  });

  it('should render with "video-react-new-icon-fullscreen" class when player exits full screen', () => {
    const wrapper = shallow(
      <FullscreenToggle
        actions={{}}
        player={{
          isFullscreen: false
        }}
      />
    );
    expect(wrapper.hasClass('video-react-new-icon-fullscreen')).toBe(true);
  });
});
