import React from 'react';
import { shallow } from 'enzyme';
import PosterImage from '../components/PosterImage';

describe('PosterImage', () => {
  it('should render with "div" tag', () => {
    const wrapper = shallow(
      <PosterImage
        poster="poster.png"
        player={{
          hasStarted: false
        }}
      />
    );

    expect(wrapper.type()).toBe('div');
  });

  it('should render with "video-react-new-poster" class', () => {
    const wrapper = shallow(
      <PosterImage
        poster="poster.png"
        player={{
          hasStarted: false
        }}
      />
    );
    expect(wrapper.hasClass('video-react-new-poster')).toBe(true);
  });
});
