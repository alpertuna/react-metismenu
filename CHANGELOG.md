# Change Log
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [1.3.1] - 2017-06-19
### Fixed
- To avoid unneccessary renders, added some extra controls

## [1.3.0-alpha.3] - 2017-04-21
### Added
- `reduxStoreName` prop to customize store field name
- Multiple `react-metismenu` usage under same Redux `Provider`
- Function support for `classNameContainer` prop to produce dynamic class names

## [1.3.0-alpha.2] - 2017-03-01
### Fixed
- Some little bugs

## [1.3.0-alpha.1] - 2017-02-03
### Added
- `useExternalReduxStore` support for applications with Redux

## [1.2.2] - 2016-12-20
### Fixed
- `label` and `id` content props now available in custom links like `to`

## [1.2.1] - 2016-12-16
### Added
- Internal event emitter support for future enhancements
- `onSelected` event listener prop

## [1.1.3] - 2016-10-24
### Added
- Custom class name support for items has visible child or grand child

## [1.1.2] - 2016-10-10
### Added
- Custom class name support for items has active link
- Custom class name support for items has active child or grand child
- Allowed react element and array types for content labels

## [1.1.1] - 2016-09-26
### Added
- More transition effects
- `react-metismenu-router-link` extension part to `README.md`

## [1.1.0-alpha.1] - 2016-09-22
### Added
- Custom link component support
- Has active child control
- Custom class name support for links has active child or grand child
- Custom link component and has active child control guide in `README.md`
- Build demo page script

### Changed
- Demo page
- Standart style

### Fixed
- Optimized source code

## [1.0.0-alpha.1] - 2016-09-19
### Added
- New unit tests
- Dark theme as standart style
- Active link control support
- Flat content support
- Remote json content support
- Examples and guides for new supports to `README.md`
- `CHANGELOG.md` file

### Changed
- Dev application
- Demo page

### Fixed
- Rearranged unit tests

## [0.6.0] - 2016-09-15
### Added
- Customizable class name support
- Customizing Styles part to `README.md`

## [0.5.0] - 2016-09-12
### Added
- `react-metismenu-router-link` extension information to `README.md`
- Css files to `dist` folder

### Changed
- Styles are seperated from bundle
- Prop names about icons

## [0.4.2] - 2016-09-08
### Added
- Built dist files

## 0.4.1 - 2016-09-08 [YANKED]
### Changed
- `onClick` prop name of `LinkComponent` to `toggleSubMenu`

## 0.4.0 - 2016-09-07 [YANKED]
### Added
- Made link components customizable
- "Customizing Link Component" part to `README.md`

### Changed
- Embedded styles
- Example code
- Menu content property `href` has beed changed to `to`

## [0.3.4] - 2016-08-27
### Added
- Demo page

### Fixed
- Fixed [#6](https://github.com/alpertuna/react-metismenu/issues/6)

## [0.3.3] - 2016-08-22
### Added
- Built files

## 0.3.2 - 2016-08-22 [YANKED]
### Added
- Development guide to `README.md`
- Transition effects for toggling menu
- Linting tests using Airbnb rules
- Unit tests with coverage

### Changed
- Doc comments

### Fixed
- Items had submenu to be dead link
- Placed embedded styles to the top of `<head>` to be overrideable

## [0.3.1] - 2016-08-18
### Changed
- Webpack configurations

## 0.3.0 - 2016-08-18 [YANKED]
### Changed
- Css file was embedded in module

### Added
- External Link feature

### Removed
- css dist files

## [0.2.0] - 2016-05-13
### Changed
- Styles
- `react` module is moved to `peerDependencies` from `dependencies`

### Fixed
- Fixed [#3](https://github.com/alpertuna/react-metismenu/issues/3)

## [0.1.4] - 2016-03-23
### Fixed
- Little bug

## [0.1.3] - 2016-03-23
### Added
- Comments to source

### Changed
- Development application

### Fixed
- Some bugs


## [0.1.2] - 2016-03-23
### Added
- `.npmignore` to ignore dev tools

## 0.1.1 - 2016-03-23 [YANKED]
### Changed
- Used `js` extension for source code instead of `jsx`

## 0.1.0 - 2016-03-23 [YANKED]
### Added
- Main structure of MetisMenu
- Development tools
- Core css file

[1.3.1]: https://github.com/alpertuna/react-metismenu/compare/v1.3.0-alpha.3...v1.3.1
[1.3.0-alpha.3]: https://github.com/alpertuna/react-metismenu/compare/v1.3.0-alpha.2...v1.3.0-alpha.3
[1.3.0-alpha.2]: https://github.com/alpertuna/react-metismenu/compare/v1.3.0-alpha.1...v1.3.0-alpha.2
[1.3.0-alpha.1]: https://github.com/alpertuna/react-metismenu/compare/v1.2.2...v1.3.0-alpha.1
[1.2.2]: https://github.com/alpertuna/react-metismenu/compare/v1.2.1...v1.2.2
[1.2.1]: https://github.com/alpertuna/react-metismenu/compare/v1.1.3...v1.2.1
[1.1.3]: https://github.com/alpertuna/react-metismenu/compare/v1.1.2...v1.1.3
[1.1.2]: https://github.com/alpertuna/react-metismenu/compare/v1.1.1...v1.1.2
[1.1.1]: https://github.com/alpertuna/react-metismenu/compare/v1.1.0-alpha.1...v1.1.1
[1.1.0-alpha.1]: https://github.com/alpertuna/react-metismenu/compare/v1.0.0-alpha.1...v1.1.0-alpha.1
[1.0.0-alpha.1]: https://github.com/alpertuna/react-metismenu/compare/v0.6.0...v1.0.0-alpha.1
[0.6.0]: https://github.com/alpertuna/react-metismenu/compare/v0.5.0...v0.6.0
[0.5.0]: https://github.com/alpertuna/react-metismenu/compare/v0.4.2...v0.5.0
[0.4.2]: https://github.com/alpertuna/react-metismenu/compare/v0.3.4...v0.4.2
[0.3.4]: https://github.com/alpertuna/react-metismenu/compare/v0.3.3...v0.3.4
[0.3.3]: https://github.com/alpertuna/react-metismenu/compare/v0.3.1...v0.3.3
[0.3.1]: https://github.com/alpertuna/react-metismenu/compare/v0.2.0...v0.3.1
[0.2.0]: https://github.com/alpertuna/react-metismenu/compare/v0.1.4...v0.2.0
[0.1.4]: https://github.com/alpertuna/react-metismenu/compare/v0.1.3...v0.1.4
[0.1.3]: https://github.com/alpertuna/react-metismenu/compare/v0.1.2...v0.1.3
[0.1.2]: https://github.com/alpertuna/react-metismenu/compare/v0.1.0...v0.1.2
