# Vitest VS Code issue repro

## Issue

The package `a` has a `vitest.workspace.ts` file.

This causes the extension to only recognize that package.

Removing that file causes the other packages to be recognized, as expected.
