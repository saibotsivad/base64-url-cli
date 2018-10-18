# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

Change categories are:

* `Added` for new features.
* `Changed` for changes in existing functionality.
* `Deprecated` for once-stable features removed in upcoming releases.
* `Removed` for deprecated features removed in this release.
* `Fixed` for any bug fixes.
* `Security` to invite users to upgrade in case of vulnerabilities.

## [Unreleased]

### Added
- Changelog, license, and guide for contributing.
- Support for NodeJS 6, 8, and 10.

### Changed
- Updated the [base64-url](https://github.com/joaquimserafim/base64-url)
  dependency to the latest, `^1.2.1` to `^2.2.0` to handle a
  [security issue](https://nodesecurity.io/advisories/660). Also
  update all dev dependencies, used for tests.
- Update the code to modern JS, and `process.stdout.write` instead of
  console logging the output.

### Removed
- Support for NodeJS versions before 6.
