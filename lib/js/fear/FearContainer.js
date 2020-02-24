"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _lodash = _interopRequireDefault(require("lodash"));

var _FearDeck = _interopRequireDefault(require("./FearDeck"));

var _fearCards = _interopRequireDefault(require("./fear-cards.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var FearContainer =
/*#__PURE__*/
function (_Component) {
  _inherits(FearContainer, _Component);

  function FearContainer(props) {
    var _this;

    _classCallCheck(this, FearContainer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FearContainer).call(this, props));
    _this.state = {
      fearDeck: _this.generateFearDeck(_fearCards.default),
      activeFears: [],
      discardedFears: []
    };
    _this.revealFear = _this.revealFear.bind(_assertThisInitialized(_this));
    _this.useFear = _this.useFear.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(FearContainer, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.props.earnedFearCards > 0) {
        this.earnFearCards();
      }
    }
  }, {
    key: "generateFearDeck",
    value: function generateFearDeck(fearCards) {
      var totalCards = this.props.fearSetup.reduce(function (total, value) {
        return total + value;
      }, 0);

      var deck = _lodash.default.shuffle(fearCards).slice(0, totalCards);

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = deck[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var card = _step.value;
          card["revealed"] = false;
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

      return deck;
    }
  }, {
    key: "getTerrorLevel",
    value: function getTerrorLevel() {
      var earnedTotal = this.state.activeFears.length + this.state.discardedFears.length;
      var level2 = this.props.fearSetup[0];
      var level3 = this.props.fearSetup[1] + level2;

      if (earnedTotal >= level3) {
        return 3;
      } else if (earnedTotal >= level2) {
        return 2;
      } else {
        return 1;
      }
    }
  }, {
    key: "earnFearCards",
    value: function earnFearCards() {
      var fearDeck = this.state.fearDeck;
      var activeFears = this.state.activeFears;
      var count = this.props.earnedFearCards;

      while (count > 0 && fearDeck.length > 0) {
        count -= 1;
        activeFears.push(fearDeck.pop());
      }

      this.setState({
        fearDeck: fearDeck,
        activeFears: activeFears
      });
      this.props.resetEarnedFearCards();
      this.props.updateTerrorLevel(this.getTerrorLevel());
    }
  }, {
    key: "revealFear",
    value: function revealFear(cardId) {
      var activeFears = this.state.activeFears;
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = activeFears[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var card = _step2.value;

          if (card.id === cardId) {
            card.revealed = true;
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      this.setState({
        activeFears: activeFears
      });
    }
  }, {
    key: "useFear",
    value: function useFear(cardId) {
      var activeFears = this.state.activeFears;
      var discardedFears = this.state.discardedFears;
      var selected = null;
      activeFears.forEach(function (card, index) {
        if (card.id === cardId) {
          selected = index;
        }
      });

      if (selected === null) {
        return;
      }

      var card = activeFears[selected];
      activeFears.splice(selected, 1);
      discardedFears.push(card);
      this.setState({
        activeFears: activeFears,
        discardedFears: discardedFears
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        className: "fear-container"
      }, _react.default.createElement(_FearDeck.default, {
        fearDeck: this.state.fearDeck,
        activeFears: this.state.activeFears,
        discardedFears: this.state.discardedFears,
        handleReveal: this.revealFear,
        handleUse: this.useFear
      }));
    }
  }]);

  return FearContainer;
}(_react.Component);

exports.default = FearContainer;