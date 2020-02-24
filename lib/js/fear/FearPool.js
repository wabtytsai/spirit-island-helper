"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

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

var FearPool =
/*#__PURE__*/
function (_Component) {
  _inherits(FearPool, _Component);

  function FearPool(props) {
    var _this;

    _classCallCheck(this, FearPool);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FearPool).call(this, props));
    _this.totalFears = _this.props.players * 4;
    _this.state = {
      value: 1,
      fears: _this.totalFears
    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.generateFear = _this.generateFear.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(FearPool, [{
    key: "handleChange",
    value: function handleChange(e) {
      this.setState({
        value: Math.max(e.target.value, 0)
      });
    }
  }, {
    key: "generateFear",
    value: function generateFear() {
      var value = this.state.value;
      var fears = this.state.fears - value;
      var count = 0;

      while (fears <= 0) {
        fears += this.totalFears;
        count += 1;
      }

      if (count > 0) {
        this.props.earnFearCards(count);
      }

      this.setState({
        value: 1,
        fears: fears
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        className: "fear-pool-container"
      }, _react.default.createElement("div", {
        className: "fear-pool"
      }, this.state.fears, " fear tokens until next fear card."), _react.default.createElement("div", {
        className: "generate-fear"
      }, _react.default.createElement("input", {
        type: "number",
        value: this.state.value,
        onChange: this.handleChange
      }), _react.default.createElement("button", {
        onClick: this.generateFear
      }, "Generate Fear")));
    }
  }]);

  return FearPool;
}(_react.Component);

exports.default = FearPool;