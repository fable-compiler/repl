# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Unreleased

## 2.1.0 - 2020-07-02

* Fix https://github.com/fable-compiler/Fable/issues/2113: UTF8.GetString fails in REPL

## 2.0.0 - 2020-03-23

* Complete from to use Feliz and Feliz.Bulma
* Fix https://github.com/fable-compiler/Fable/issues/1954: Add FABLE_COMPILER directive

## 1.0.6 - 2020-03-09

* Fix #106: Model should be updated in the update function not recreated from scratch

## 1.0.5 - 2020-03-04

* Update to fable-standalone 1.3.5

## 1.0.4 - 2020-02-20

* Fix #79: Use CSS classes in the F# code instead of inline style

## 1.0.3 - 2020-02-20

* Fix #79: Use CSS to style the calculator example

## 1.0.2 - 2020-02-20

* Fix #75: Remove logs from iframeMessage when in production mode

## 1.0.1 - 2020-02-20

* Fix build.fsx, the app was built before updating Prelude.fs

## 1.0.0 - 2020-02-20

### Fixed

* Fix #86: Make a distinction between REPL and Fable version in the info panel
* Init the changelog