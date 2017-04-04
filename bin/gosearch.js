#!/usr/bin/env node
 
var process = require('process')
var open = require("open");

var searchWords = process.argv.splice(2);

open("https://www.google.com/search?q=+" + searchWords.join('+'));
