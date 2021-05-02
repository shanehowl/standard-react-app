// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom'

/**
 * fix: `matchMedia` not present, legacy browsers require a polyfill
 */
const manualMatchMedia = () => {
  return {
    matches: false,
    addListener() {},
    removeListener() {},
  }
}

window.matchMedia = window.matchMedia || manualMatchMedia
