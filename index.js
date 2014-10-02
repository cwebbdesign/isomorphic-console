// A simple Isomorphic console.log.
// If window.console does not exist, it will be replaced with a console object
// which has a single log function mapped to sys.print
module.exports = (function() {
  'use strict';

  // Declare Dependencies
  // --------------------------------------------------------
  var sys = require('sys'),
    console;
  // --------------------------------------------------------


  if (typeof window !== 'undefined' && window.console) {
    console = window.console;
  } else {
    console = {
      log: sys.print
    };
  }

  // Return the Export
  return console;
}());