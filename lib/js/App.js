"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

require("../css/App.css");

var _InvaderContainer = _interopRequireDefault(require("./invader/InvaderContainer"));

var _FearContainer = _interopRequireDefault(require("./fear/FearContainer"));

var _FearPool = _interopRequireDefault(require("./fear/FearPool"));

var _TerrorLevel = _interopRequireDefault(require("./fear/TerrorLevel"));

var _BlightContainer = _interopRequireDefault(require("./blight/BlightContainer"));

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function App() {
  var _useState = (0, _react.useState)(1),
      _useState2 = _slicedToArray(_useState, 2),
      players = _useState2[0],
      setPlayers = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      start = _useState4[0],
      setStart = _useState4[1];

  var _useState5 = (0, _react.useState)([3, 3, 3]),
      _useState6 = _slicedToArray(_useState5, 2),
      fearSetup = _useState6[0],
      _setFearSetup = _useState6[1];

  var _useState7 = (0, _react.useState)([1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3]),
      _useState8 = _slicedToArray(_useState7, 2),
      invaderSetup = _useState8[0],
      _setInvaderSetup = _useState8[1];

  var _useState9 = (0, _react.useState)(0),
      _useState10 = _slicedToArray(_useState9, 2),
      earnedFearCards = _useState10[0],
      setEarnedFearCards = _useState10[1];

  var _useState11 = (0, _react.useState)(1),
      _useState12 = _slicedToArray(_useState11, 2),
      terrorLevel = _useState12[0],
      setTerrorLevel = _useState12[1];

  var renderBody = function renderBody() {
    if (start) {
      return _react.default.createElement("div", {
        className: "main-container"
      }, _react.default.createElement(_FearContainer.default, {
        fearSetup: fearSetup,
        earnedFearCards: earnedFearCards,
        resetEarnedFearCards: function resetEarnedFearCards() {
          return setEarnedFearCards(0);
        },
        updateTerrorLevel: function updateTerrorLevel(level) {
          return setTerrorLevel(level);
        }
      }), _react.default.createElement(_FearPool.default, {
        players: players,
        earnFearCards: function earnFearCards(count) {
          setEarnedFearCards(count);
        }
      }), _react.default.createElement(_TerrorLevel.default, {
        terrorLevel: terrorLevel
      }), _react.default.createElement(_BlightContainer.default, {
        players: players
      }), _react.default.createElement(_InvaderContainer.default, {
        setup: invaderSetup
      }));
    }

    var playerCounts = [1, 2, 3, 4];
    return _react.default.createElement("div", {
      className: "spirit-island-setup"
    }, playerCounts.map(function (player) {
      return _react.default.createElement("div", {
        key: player,
        className: (0, _utils.classSet)({
          "player-count": true,
          "player-count-selected": players === player
        }),
        onClick: function onClick(player) {
          setPlayers(player);
        }
      }, player, " Player", player > 1 ? "s" : "");
    }), _react.default.createElement("button", {
      onClick: function onClick() {
        setStart(true);
      }
    }, " Start "));
  };

  return _react.default.createElement("div", {
    className: "App"
  }, _react.default.createElement("header", {
    className: "App-header"
  }, _react.default.createElement("h1", {
    className: "App-title"
  }, "Spirit Island Helper")), renderBody());
}

var _default = App;
exports.default = _default;