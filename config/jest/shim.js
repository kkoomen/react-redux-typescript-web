/**
 * Applies polyfills for test environments.
 */

global.cancelAnimationFrame = global.clearTimeout;

global.requestAnimationFrame = function(callback) {
  setTimeout(callback, 0);
};
