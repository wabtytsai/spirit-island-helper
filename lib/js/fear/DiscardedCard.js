"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _utils = require("../utils");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var WIDTH = 300;
var HEIGHT = 420;

var DiscardedCard =
/*#__PURE__*/
function (_Component) {
  _inherits(DiscardedCard, _Component);

  function DiscardedCard(props) {
    var _this;

    _classCallCheck(this, DiscardedCard);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DiscardedCard).call(this, props));
    _this.state = {
      hover: false
    };
    _this.showToolTip = _this.showToolTip.bind(_assertThisInitialized(_this));
    _this.hideToolTip = _this.hideToolTip.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(DiscardedCard, [{
    key: "showToolTip",
    value: function showToolTip() {
      this.setState({
        hover: true
      });
    }
  }, {
    key: "hideToolTip",
    value: function hideToolTip() {
      this.setState({
        hover: false
      });
    }
  }, {
    key: "renderImage",
    value: function renderImage(card) {
      var filename = (0, _utils.toFilename)(card.name, "jpg");
      return _react.default.createElement("img", {
        src: this.props.images(filename),
        alt: card.name,
        width: WIDTH,
        height: HEIGHT
      });
    }
  }, {
    key: "render",
    value: function render() {
      var card = this.props.card;
      return _react.default.createElement("div", {
        className: "discarded-card"
      }, _react.default.createElement("p", {
        onMouseEnter: this.showToolTip,
        onMouseLeave: this.hideToolTip
      }, card.name), this.state.hover && this.renderImage(card));
    }
  }]);

  return DiscardedCard;
}(_react.Component);

exports.default = DiscardedCard;