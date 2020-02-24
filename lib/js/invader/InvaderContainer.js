"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _lodash = _interopRequireDefault(require("lodash"));

var _utils = require("../utils");

var _invaderDecks = _interopRequireDefault(require("./invader-decks.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var WIDTH = 100;
var HEIGHT = 150;

var InvaderContainer =
/*#__PURE__*/
function (_Component) {
  _inherits(InvaderContainer, _Component);

  function InvaderContainer(props) {
    var _this;

    _classCallCheck(this, InvaderContainer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(InvaderContainer).call(this, props));
    var shuffledInvaderCards = {
      "1": _lodash.default.shuffle(_invaderDecks.default["1"]),
      "2": _lodash.default.shuffle(_invaderDecks.default["2"]),
      "3": _lodash.default.shuffle(_invaderDecks.default["3"])
    };
    _this.deck = [];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = props.setup[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var stage = _step.value;

        _this.deck.push(shuffledInvaderCards[stage].pop());
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    _this.state = {
      round: 0
    };
    _this.images = require.context("../../img/invader", false, /\.png/);
    return _this;
  }

  _createClass(InvaderContainer, [{
    key: "handleClick",
    value: function handleClick() {
      this.setState({
        round: this.state.round + 1
      });
    }
  }, {
    key: "getInvaderCard",
    value: function getInvaderCard(round) {
      if (round < 0) {
        return _react.default.createElement("div", {
          className: "invader-card"
        }, "None");
      }

      var filename = (0, _utils.toFilename)(this.deck[round], "png");
      return _react.default.createElement("img", {
        className: "invader-card",
        src: this.images(filename),
        alt: this.deck[round],
        width: WIDTH,
        height: HEIGHT
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.round >= this.deck.length) {
        return _react.default.createElement("div", null, "Game Over");
      }

      return _react.default.createElement("div", {
        className: "invader-container"
      }, _react.default.createElement("span", null, _react.default.createElement("div", {
        className: "invader-header"
      }, "Ravage"), this.getInvaderCard(this.state.round - 2)), _react.default.createElement("span", null, _react.default.createElement("div", {
        className: "invader-header"
      }, "Build"), this.getInvaderCard(this.state.round - 1)), _react.default.createElement("span", null, _react.default.createElement("div", {
        className: "invader-header"
      }, "Explore"), this.getInvaderCard(this.state.round)), _react.default.createElement("span", null, _react.default.createElement("div", {
        className: "invader-header"
      }, "Invader Deck"), _react.default.createElement("div", {
        className: "invader-card"
      }, this.deck.length - this.state.round - 1)), _react.default.createElement("span", null, _react.default.createElement("button", {
        onClick: this.handleClick.bind(this)
      }, "Advance")));
    }
  }]);

  return InvaderContainer;
}(_react.Component);

exports.default = InvaderContainer;