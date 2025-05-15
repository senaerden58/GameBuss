'use strict';
const tombala=require("tombala")

module.exports = gamecenter;

function gamecenter() {
  console.log(tombala())
  return 'Hello from gamecenter';
}

gamecenter();