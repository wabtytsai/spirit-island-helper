"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toFilename = toFilename;
exports.classSet = classSet;

function toFilename(name) {
  var extension = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var ret = "./" + name.toLowerCase().replace(/ /g, "_");

  if (extension !== "") {
    ret += "." + extension;
  }

  return ret;
}

function classSet(conditions) {
  var classes = [];

  for (var key in conditions) {
    if (conditions[key] === true) {
      classes.push(key);
    }
  }

  return classes.join(" ");
}