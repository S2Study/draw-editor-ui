"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styles = require("./ModeChangerStyle.css");
var BrushToolButton_1 = require("./brush/BrushToolButton");
var FillToolButton_1 = require("./fill/FillToolButton");
var HandToolButton_1 = require("./hand/HandToolButton");
var TextToolButton_1 = require("./text/TextToolButton");
var ClipToolButton_1 = require("./clip/ClipToolButton");
var EyedropperToolButton_1 = require("./eyedropper/EyedropperToolButton");
var EraserToolButton_1 = require("./eraser/EraserToolButton");
var ModeItem = (function () {
    function ModeItem(mode, thickness, selected) {
        if (thickness === void 0) { thickness = 0; }
        if (selected === void 0) { selected = true; }
        this.mode = mode;
        this.selected = selected;
        this.thickness = thickness;
    }
    return ModeItem;
}());
exports.ModeItem = ModeItem;
var ModeChanger = (function (_super) {
    __extends(ModeChanger, _super);
    function ModeChanger(props) {
        var _this = _super.call(this, props) || this;
        _this.modes = {};
        _this.modes[_this.props.changer.STROKE_MODE] = function (item, i) {
            return React.createElement(BrushToolButton_1.BrushToolButton, { editorProperties: _this.props.editorProperties, key: i, selected: item.selected, thickness: item.thickness, onSelect: function () {
                    _this.props.onSelect(i);
                } });
        };
        _this.modes[_this.props.changer.FILL_MODE] = function (item, i) {
            return React.createElement(FillToolButton_1.FillToolButton, { editorProperties: _this.props.editorProperties, key: i, selected: item.selected, onSelect: function () {
                    _this.props.onSelect(i);
                } });
        };
        _this.modes[_this.props.changer.HAND_TOOL_MODE] = function (item, i) {
            return React.createElement(HandToolButton_1.HandToolButton, { editorProperties: _this.props.editorProperties, key: i, selected: item.selected, onSelect: function () {
                    _this.props.onSelect(i);
                } });
        };
        _this.modes[_this.props.changer.TEXT_MODE] = function (item, i) {
            return React.createElement(TextToolButton_1.TextToolButton, { editorProperties: _this.props.editorProperties, key: i, selected: item.selected, onSelect: function () {
                    _this.props.onSelect(i);
                } });
        };
        _this.modes[_this.props.changer.CLIP_MODE] = function (item, i) {
            return React.createElement(ClipToolButton_1.ClipToolButton, { key: i, selected: item.selected, onSelect: function () {
                    _this.props.onSelect(i);
                } });
        };
        _this.modes[_this.props.changer.EYEDROPPER_MODE] = function (item, i) {
            return React.createElement(EyedropperToolButton_1.EyedropperToolButton, { editorProperties: _this.props.editorProperties, key: i, selected: item.selected, onSelect: function () {
                    _this.props.onSelect(i);
                } });
        };
        _this.modes[_this.props.changer.ERASER_MODE] = function (item, i) {
            return React.createElement(EraserToolButton_1.EraserToolButton, { editorProperties: _this.props.editorProperties, key: i, selected: item.selected, onSelect: function () {
                    _this.props.onSelect(i);
                } });
        };
        return _this;
    }
    ModeChanger.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: styles.container }, this.props.modeItems.map(function (item, i) {
            return _this.modes[i](item, i);
        })));
    };
    return ModeChanger;
}(React.Component));
exports.ModeChanger = ModeChanger;
//# sourceMappingURL=ModeChanger.js.map