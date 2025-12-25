# video-react-new

[![npm version](https://badge.fury.io/js/video-react-new.svg)](https://badge.fury.io/js/video-react-new)
[![Package Quality](http://npm.packagequality.com/shield/video-react-new.svg)](http://packagequality.com/#?package=video-react-new)
[![codecov](https://codecov.io/gh/video-react-new/video-react-new/branch/master/graph/badge.svg)](https://codecov.io/gh/video-react-new/video-react-new)

Video.React is a web video player built from the ground up for an HTML5 world using React library.

### ✨ The future of Video.React New

Maintenance of Video.React is being taken over by [Mux](https://www.mux.com). Mux is a [video api](https://www.mux.com/video-api) for developers. The team at Mux have worked on many highly respected projects and are committed to improving video tooling for developers.

Video.React will remain open source, but with a higher rate of fixes and releases over time. Thanks to everyone in the community for your ongoing support.

## Installation

Install `video-react-new` and **peer dependencies** via NPM

```sh
npm install --save video-react-new react react-dom
```

import css in your app or add video-react-new styles in your page

```jsx
import '~video-react-new/dist/video-react-new.css'; // import css
```

or

```scss
@import '~video-react-new/styles/scss/video-react-new.scss'; // or import scss
```



Import the components you need, example:

```js
import React from 'react';
import { Player } from 'video-react-new';

export default props => {
  return (
    <Player>
      <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
    </Player>
  );
};
```

## Browser support

| Browser | Windows  |  Mac  | Linux | Android  |    iOS     |
| :-----: | :------: | :---: | :---: | :------: | :--------: |
| Chrome  |  **Y**   | **Y** | **Y** |  **Y**   | **Native** |
| Firefox |  **Y**   | **Y** | **Y** | untested | **Native** |
|  Edge   |  **Y**   |   -   |   -   |    -     |     -      |
|  IE 11  | untested |   -   |   -   |    -     |     -      |
| Safari  |    -     | **Y** |   -   |    -     |   **Y**    |

Please note that only the latest stable version is tested and supported. video-react-new may be usable in older releases, and we will accept pull requests for them, but they will not be frequently tested or actively supported.

For the items marked as "untested", we do welcome volunteer testers.

## Development

Run tests:

```sh
npm test
```

### Run from local

```bash
$ npm install
$ npm start
```

## Contribution

Interested in making contribution to this project? Want to report a bug? Please read the [contribution guide](./CONTRIBUTION.md).

## Inspiration & Credits

- This project is heavily inspired by [video.js](http://www.videojs.com), and most of our css styles came from [video.js's styles](https://github.com/videojs/video.js/tree/master/src/css).
- The document site is built with [reactstrap](https://github.com/reactstrap/reactstrap).
- All the icons came from [Google Material Icons](https://material.io/icons/)
- Fonts were built by [iconmon](https://icomoon.io/).
