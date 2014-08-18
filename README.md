# Isomorphic Console

A very simple mechanism for swapping in sys.print if window.console does not exist. 

You could make this more robust by swapping in winston.

## Installation

    npm install isomorphic-console

## Usage

    var console = require('isomorphic-console');
    console.log('ohmigod');
