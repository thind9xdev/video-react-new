# video-react-new

[![npm version](https://badge.fury.io/js/video-react-new.svg)](https://badge.fury.io/js/video-react-new)
[![Package Quality](http://npm.packagequality.com/shield/video-react-new.svg)](http://packagequality.com/#?package=video-react-new)

Video-React-New is a web video player built from the ground up for an HTML5 world using React library.

### ✨ About Video-React-New

This is a maintained fork of the original [video-react](https://github.com/video-react/video-react) project, with continued support for modern React versions (React 15-19) and ongoing bug fixes. The project aims to provide a stable, feature-rich video player component for React applications.

**Key Features:**
- 🎬 HTML5 video player built specifically for React
- ⚛️ Full support for React 15, 16, 17, 18, and 19
- 📱 Responsive design that works on mobile and desktop
- 🎨 Customizable UI with SCSS/CSS
- 🔌 Plugin support for HLS, DASH and other formats
- ♿ Accessibility features with keyboard controls
- 🌐 Multiple subtitle/caption track support
- 🎛️ Playback rate control
- 📺 Fullscreen support
- 🔊 Volume control with mute toggle

## Installation

Install `video-react-new` and **peer dependencies** via NPM:

```sh
npm install --save video-react-new react react-dom
```

Or using Yarn:

```sh
yarn add video-react-new react react-dom
```

## Usage

### Import Styles

You need to import the CSS styles. Choose one of the following methods:

**Method 1: Import CSS directly in your JavaScript**

```jsx
import 'video-react-new/dist/video-react-new.css';
```

**Method 2: Import SCSS (for customization)**

```scss
@import '~video-react-new/styles/scss/video-react-new.scss';
```

**Method 3: Link in HTML**

```html
<link
  rel="stylesheet"
  href="https://unpkg.com/video-react-new/dist/video-react-new.css"
/>
```

### Basic Example

Import the `Player` component and use it in your React application:

```jsx
import React from 'react';
import { Player } from 'video-react-new';

export default function VideoPlayer() {
  return (
    <Player>
      <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
    </Player>
  );
}
```

### Advanced Example with Multiple Sources and Subtitles

```jsx
import React from 'react';
import { Player, BigPlayButton } from 'video-react-new';

export default function AdvancedPlayer() {
  return (
    <Player
      playsInline
      poster="/assets/poster.png"
      src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    >
      <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
      <track
        kind="captions"
        src="/assets/captions.en.vtt"
        srclang="en"
        label="English"
        default
      />
      <track
        kind="captions"
        src="/assets/captions.es.vtt"
        srclang="es"
        label="Spanish"
      />
      <BigPlayButton position="center" />
    </Player>
  );
}
```

### Controlling the Player

You can control the player programmatically using refs:

```jsx
import React, { useRef } from 'react';
import { Player } from 'video-react-new';

export default function ControlledPlayer() {
  const playerRef = useRef(null);

  const handlePlay = () => {
    playerRef.current.play();
  };

  const handlePause = () => {
    playerRef.current.pause();
  };

  const handleSeek = (seconds) => {
    playerRef.current.seek(seconds);
  };

  return (
    <div>
      <Player ref={playerRef}>
        <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
      </Player>
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
      <button onClick={() => handleSeek(10)}>Skip to 10s</button>
    </div>
  );
}
```

### Using with State Management

```jsx
import React, { useRef, useEffect } from 'react';
import { Player } from 'video-react-new';

export default function StatePlayer() {
  const playerRef = useRef(null);

  useEffect(() => {
    // Subscribe to player state changes
    playerRef.current.subscribeToStateChange((state, prevState) => {
      console.log('Current time:', state.currentTime);
      console.log('Duration:', state.duration);
      console.log('Playing:', !state.paused);
    });
  }, []);

  return (
    <Player ref={playerRef}>
      <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
    </Player>
  );
}
```

## Available Components

- `Player` - Main video player component
- `BigPlayButton` - Large play button overlay
- `LoadingSpinner` - Loading indicator
- `PosterImage` - Poster image component
- `ControlBar` - Player control bar
- `PlayToggle` - Play/pause button
- `ForwardControl` - Forward skip button
- `ReplayControl` - Replay/rewind button
- `FullscreenToggle` - Fullscreen button
- `ProgressControl` - Progress bar
- `SeekBar` - Seekable progress bar
- `PlaybackRateMenuButton` - Playback speed control
- `VolumeMenuButton` - Volume control
- `ClosedCaptionButton` - Closed captions toggle
- `RemainingTimeDisplay` - Remaining time display
- `CurrentTimeDisplay` - Current time display
- `DurationDisplay` - Total duration display
- `TimeDivider` - Time divider
- `Bezel` - Animated bezel for actions
- `Shortcut` - Keyboard shortcuts

## API Documentation

### Player Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `fluid` | boolean | `true` | Player size follows container width |
| `width` | number | - | Player width in pixels |
| `height` | number | - | Player height in pixels |
| `src` | string | - | Video source URL |
| `poster` | string | - | Poster image URL |
| `preload` | string | `'auto'` | Preload strategy: 'auto', 'metadata', 'none' |
| `autoPlay` | boolean | `false` | Autoplay video on load |
| `loop` | boolean | `false` | Loop video playback |
| `muted` | boolean | `false` | Mute video by default |
| `playsInline` | boolean | `false` | Play inline on mobile devices |
| `aspectRatio` | string | `'auto'` | Aspect ratio (e.g., '16:9', '4:3') |
| `startTime` | number | - | Start playback at specific time (seconds) |

### Player Methods (via ref)

| Method | Description |
|--------|-------------|
| `play()` | Start playback |
| `pause()` | Pause playback |
| `load()` | Load video |
| `seek(time)` | Seek to specific time in seconds |
| `forward(seconds)` | Skip forward by seconds |
| `replay(seconds)` | Skip backward by seconds |
| `changeRate(rate)` | Change playback rate (0.5, 1, 1.5, 2, etc.) |
| `changeVolume(volume)` | Change volume (0 to 1) |
| `mute()` | Mute audio |
| `unmute()` | Unmute audio |
| `toggleFullscreen()` | Toggle fullscreen mode |
| `subscribeToStateChange(callback)` | Subscribe to state changes |

## Browser support

| Browser | Windows  |  Mac  | Linux | Android  |    iOS     |
| :-----: | :------: | :---: | :---: | :------: | :--------: |
| Chrome  |  **Yes**   | **Yes** | **Yes** |  **Yes**   | **Native** |
| Firefox |  **Yes**   | **Yes** | **Yes** | **Yes** | **Native** |
|  Edge   |  **Yes**   | **Yes**   |   -   |    -     |     -      |
|  IE 11  | Untested |   -   |   -   |    -     |     -      |
| Safari  |    -     | **Yes** |   -   |    -     |   **Yes**    |

**Notes:**
- Only the latest stable version is actively tested and supported
- Video-react-new may work in older browser releases, and we accept pull requests for them
- "Native" means the browser's native video player is used on mobile
- For "Untested" browsers, community testing is welcome

## HLS and DASH Support

For HLS (HTTP Live Streaming) playback, you can use [hls.js](https://github.com/video-dev/hls.js):

```jsx
import React, { useRef, useEffect } from 'react';
import { Player } from 'video-react-new';
import Hls from 'hls.js';

export default function HLSPlayer() {
  const playerRef = useRef(null);

  useEffect(() => {
    const player = playerRef.current;
    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource('https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8');
      hls.attachMedia(player.video.video);
    } else if (player.video.video.canPlayType('application/vnd.apple.mpegurl')) {
      player.video.video.src = 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8';
    }
  }, []);

  return (
    <Player ref={playerRef}>
      <source src="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" type="application/x-mpegURL" />
    </Player>
  );
}
```

## Keyboard Shortcuts

When the player is focused, you can use these keyboard shortcuts:

| Key | Action |
|-----|--------|
| `Space` or `K` | Play/Pause |
| `←` | Rewind 5 seconds |
| `→` | Forward 5 seconds |
| `↑` | Increase volume |
| `↓` | Decrease volume |
| `F` | Toggle fullscreen |
| `M` | Toggle mute |
| `0-9` | Jump to 0%-90% of video |
| `Home` | Jump to beginning |
| `End` | Jump to end |

## Styling and Customization

The player can be styled using CSS or SCSS. All components have BEM-style class names:

```css
/* Custom player styles */
.video-react .video-react-big-play-button {
  background-color: #ff0000;
  border-color: #ff0000;
}

.video-react .video-react-control-bar {
  background-color: rgba(0, 0, 0, 0.7);
}

.video-react .video-react-play-progress {
  background-color: #ff0000;
}
```

For SCSS customization, you can override variables before importing:

```scss
// Override default variables
$primary-background-color: #000;
$primary-foreground-color: #fff;
$primary-color: #ff0000;

// Import the styles
@import '~video-react-new/styles/scss/video-react-new.scss';
```

## Development

### Setup

Clone the repository and install dependencies:

```bash
git clone https://github.com/thind9xdev/video-react-new-dart.git
cd video-react-new-dart
npm install
```

### Run Development Server

Start the development server with hot reloading:

```bash
npm start
```

The documentation site will be available at `http://localhost:8000`.

### Run Tests

Run the test suite:

```bash
npm test
```

Run tests in watch mode:

```bash
npm run test:watch
```

Run tests with coverage:

```bash
npm run test:coverage
```

### Build

Build the library:

```bash
npm run build
```

Build the documentation:

```bash
npm run build-docs
```

### Linting

Run ESLint:

```bash
npm run lint
```

Format code with Prettier:

```bash
npm run format-all
```

## Contribution

We welcome contributions! If you'd like to contribute to video-react-new:

1. **Fork the repository** on GitHub
2. **Clone your fork** locally
3. **Create a feature branch**: `git checkout -b my-new-feature`
4. **Make your changes** and add tests if applicable
5. **Run tests**: `npm test`
6. **Commit your changes**: `git commit -am 'Add some feature'`
7. **Push to the branch**: `git push origin my-new-feature`
8. **Submit a pull request**

For more detailed information, please read the [contribution guide](./CONTRIBUTION.md).

### Reporting Issues

If you encounter a bug or have a feature request:

1. Check the [issue list](https://github.com/thind9xdev/video-react-new-dart/issues) first
2. If not already reported, create a new issue
3. Provide as much detail as possible:
   - Steps to reproduce the bug
   - Expected vs actual behavior
   - Browser and version
   - React version
   - Code examples or screenshots

## FAQ

### How do I customize the player appearance?

You can customize the player by overriding CSS classes or importing the SCSS and modifying variables. See the [Styling and Customization](#styling-and-customization) section.

### Does it support HLS/DASH streaming?

Yes! You can use libraries like hls.js or dash.js with video-react-new. See the [HLS and DASH Support](#hls-and-dash-support) section.

### Can I use this with TypeScript?

Yes, the package includes TypeScript type definitions.

### How do I access the native video element?

Use a ref to access the player, then use `playerRef.current.video.video` to access the native HTML5 video element.

### Does it work with Next.js?

Yes, video-react-new works with Next.js. Just make sure to import styles appropriately for your Next.js configuration.

## License

MIT © [Video-React-New Contributors](https://github.com/thind9xdev/video-react-new-dart/graphs/contributors)

## Inspiration & Credits

- This project is a maintained fork of [video-react](https://github.com/video-react/video-react)
- Heavily inspired by [video.js](http://www.videojs.com)
- CSS styles adapted from [video.js's styles](https://github.com/videojs/video.js/tree/master/src/css)
- Documentation site built with [reactstrap](https://github.com/reactstrap/reactstrap)
- Icons from [Google Material Icons](https://material.io/icons/)
- Fonts built with [IcoMoon](https://icomoon.io/)

## Links

- [GitHub Repository](https://github.com/thind9xdev/video-react-new-dart)
- [NPM Package](https://www.npmjs.com/package/video-react-new)
- [Issue Tracker](https://github.com/thind9xdev/video-react-new-dart/issues)
- [Changelog](./CHANGELOG.md)

## Support

If you find this project useful, please consider:
- ⭐ Starring the repository
- 🐛 Reporting bugs
- 💡 Suggesting new features
- 🤝 Contributing code or documentation
- 📢 Sharing with others

---

**Made with ❤️ by the Video-React-New community**
