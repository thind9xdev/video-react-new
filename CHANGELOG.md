# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Fixed
- **Module Resolution:** Fixed a "Module not found" error when using the package with bundlers like Webpack. The `package.json` now points to the correct distribution files (`dist/` instead of `lib/`).
- **TypeScript Support:** Resolved an issue where `npm` would fail to find type definitions (`@types/video-react-new`). The package now correctly bundles and declares its own TypeScript types.
- **React 19 Compatibility:** Removed usage of the legacy `contextTypes` API in the `Player` component, fixing a critical error when using the library with React 19.
